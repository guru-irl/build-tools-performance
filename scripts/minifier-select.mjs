/**
 * Selectable JS minifier for the benchmark.
 *
 * Real applications do not all use the bundler's built-in minifier. Swapping it
 * is a common, load-bearing decision -- and "we moved to a faster minifier" is
 * a claim that deserves a measurement rather than a assumption. This makes the
 * choice a dial.
 *
 *   BENCH_MINIFIER unset   the bundler's own default (currently SWC-based)
 *   BENCH_MINIFIER=swc     the built-in minimizer, stated explicitly
 *   BENCH_MINIFIER=oxc     the standalone oxc minifier, run as a plugin at the
 *                          same processAssets stage a built-in minifier uses
 *
 * The oxc path deliberately mirrors how a swapped-in minifier is wired in
 * practice: the built-in is turned OFF and a plugin takes over OPTIMIZE_SIZE,
 * so the two options are measured doing the same job at the same point in the
 * pipeline rather than one running on top of the other.
 */
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export const MINIFIERS = ['swc', 'oxc'];

/** processAssets stage used by built-in minifiers. */
export const OPTIMIZE_SIZE = 400;

export function minifierFromEnv(env = process.env) {
  const raw = (env.BENCH_MINIFIER || '').trim().toLowerCase();
  if (!raw) return null;
  if (!MINIFIERS.includes(raw)) {
    throw new Error(`unknown minifier ${JSON.stringify(raw)} (expected one of: ${MINIFIERS.join(', ')})`);
  }
  return raw;
}

/**
 * Plugin that minifies every emitted .js asset with oxc.
 *
 * Uses minifySync: the bundler already runs this stage across its own worker
 * pool, and adding a second async layer here would measure scheduling rather
 * than minification.
 */
export class OxcMinifyPlugin {
  constructor(options = {}) {
    this.sourcemap = options.sourcemap ?? false;
  }

  apply(compiler) {
    const { sources } = compiler.rspack ?? require('@rspack/core');
    const { minifySync } = require('oxc-minify');

    compiler.hooks.compilation.tap('OxcMinifyPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'OxcMinifyPlugin', stage: OPTIMIZE_SIZE },
        (assets) => {
          for (const name of Object.keys(assets)) {
            if (!name.endsWith('.js') && !name.endsWith('.mjs')) continue;
            const asset = compilation.getAsset(name);
            if (!asset) continue;
            const code = asset.source.source().toString();
            let result;
            try {
              result = minifySync(name, code, this.sourcemap ? { sourcemap: true } : {});
            } catch (err) {
              // A minifier that silently skips a file it cannot parse would
              // make this dial look faster than the alternative for the wrong
              // reason. Fail loudly instead.
              compilation.errors.push(new Error(`OxcMinifyPlugin failed on ${name}: ${err.message}`));
              continue;
            }
            if (result?.errors?.length) {
              compilation.errors.push(new Error(`OxcMinifyPlugin: ${result.errors[0]?.message ?? 'minify error'} in ${name}`));
              continue;
            }
            compilation.updateAsset(name, new sources.RawSource(result.code));
          }
        }
      );
    });
  }
}
