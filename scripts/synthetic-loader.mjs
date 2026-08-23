/**
 * rspack/webpack adapter for the synthetic loader taxonomy.
 *
 * Thin by design: all work lives in loader-core.mjs so the rspack and Vite
 * paths execute byte-identical logic and a cross-tool comparison stays
 * meaningful. This file only translates between the loader API and that core.
 *
 * Selected via the BENCH_LOADER environment variable (e.g. BENCH_LOADER=noop).
 * When unset, generated configs omit the loader rule entirely, so the default
 * benchmark configuration is completely unaffected -- an absent rule, not a
 * rule that happens to do nothing, because a no-op JS loader is itself one of
 * the costs being measured.
 */
import path from 'node:path';
import { applyWork, specFromEnv } from './loader-core.mjs';

export default function syntheticLoader(source) {
  const callback = this.async();
  const spec = specFromEnv();
  if (!spec) return callback(null, source);

  // Give each module a stable, unique basename for emitted assets so the
  // emit category cannot accidentally collapse into a single overwritten file
  // (which would silently understate its cost).
  const id = path
    .relative(this.rootContext ?? process.cwd(), this.resourcePath ?? 'unknown')
    .replace(/[^a-zA-Z0-9]+/g, '_');

  const host = {
    emit: (index, content) => this.emitFile(`synthetic/${id}.${index}.txt`, content),
  };

  applyWork(source, spec, host).then(
    (out) => callback(null, out),
    (err) => callback(err)
  );
}
