import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// See the sibling rspack config for why this walks upward instead of baking
// in an absolute path at generation time.
function findUp(rel) {
  let dir = __dirname;
  for (let i = 0; i < 8; i++) {
    const candidate = path.join(dir, rel);
    if (existsSync(candidate)) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error('could not locate ' + rel + ' above ' + __dirname);
}

// Per-module transform work, off unless BENCH_LOADER is set. Runs the SAME
// loader-core work as the rspack loader, so any cross-tool difference is a
// property of the bundlers rather than of two different implementations.
const loaderSpec = process.env.BENCH_LOADER;
let syntheticPlugin = null;
if (loaderSpec) {
  const core = await import(pathToFileURL(findUp(path.join('scripts', 'loader-core.mjs'))).href);
  const spec = core.specFromEnv();
  syntheticPlugin = {
    name: 'synthetic-transform',
    async transform(code, id) {
      if (!/\.jsx?$/.test(id)) return null;
      const emitted = [];
      const host = {
        emit: (index, content) => {
          emitted.push(this.emitFile({ type: 'asset', fileName: 'synthetic/' + id.replace(/[^a-zA-Z0-9]+/g, '_') + '.' + index + '.txt', source: content }));
        },
      };
      return { code: await core.applyWork(code, spec, host), map: null };
    },
  };
}

// Asset-stage work, mirroring the rspack config's BENCH_PLUGIN dial. Runs in
// generateBundle, Rollup's equivalent of the emitted-asset stage, so both
// tools do the same work at the same point in their pipelines.
const pluginSpec = process.env.BENCH_PLUGIN;
let assetPlugin = null;
if (pluginSpec) {
  const pcore = await import(pathToFileURL(findUp(path.join('scripts', 'plugin-core.mjs'))).href);
  const spec = pcore.pluginSpecFromEnv();
  assetPlugin = {
    name: 'synthetic-asset',
    async generateBundle(_options, bundle) {
      const list = Object.entries(bundle).map(([name, item]) => ({
        name,
        source: item.type === 'chunk' ? item.code : String(item.source ?? ''),
      }));
      const changed = await pcore.applyAssetWork(list, spec);
      for (const c of changed) {
        const item = bundle[c.name];
        if (!item) continue;
        if (item.type === 'chunk') item.code = c.source;
        else item.source = c.source;
      }
    },
  };
}
const allPlugins = [syntheticPlugin, assetPlugin].filter(Boolean);

export default defineConfig({
  root: __dirname,
  ...(allPlugins.length ? { plugins: allPlugins } : {}),
  build: {
    // Build-time levers, identical in meaning and default to the ones in the
    // sibling rspack config: minify on, source maps off unless asked. Kept in
    // lockstep so a cross-tool comparison never varies a factor on one side.
    //
    // Minification is mandatory in the default configuration, for the same
    // reason rspack.config.mjs's optimization.minimize is: with it off,
    // per-chunk cost is understated by orders of magnitude and the benchmark
    // measures the wrong thing. BENCH_MINIFY=0 exists only to size that
    // effect deliberately.
    minify: process.env.BENCH_MINIFY !== '0',
    // Off by default; see the sibling config for what turning it on measures.
    sourcemap: process.env.BENCH_SOURCEMAP === '1',
    target: 'es2022',
    // Vite must write real output to disk here, exactly like rspack's
    // output.clean: true build does. build.emptyOutDir is deliberately left
    // unset: its own default is not literally true but a null sentinel that
    // Vite resolves to true (empty the directory) whenever outDir is inside
    // root -- true here, since dist-vite is under __dirname -- and to false
    // (do not empty, and warn) otherwise. So the unset default already
    // matches rspack's clean behavior for this case. write: true, though, IS
    // made explicit rather than left to its (also true) default: a write:
    // false build would skip file emission and bias any timing/size
    // comparison against rspack, which always writes, so this is spelled
    // out to make that requirement unmissable.
    write: true,
    outDir: path.join(__dirname, 'dist-vite'),
    rollupOptions: { input: path.join(__dirname, 'src/index.jsx') },
  },
});
