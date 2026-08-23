/**
 * rspack adapter for the synthetic asset-stage plugin taxonomy.
 *
 * Thin by design: all work lives in plugin-core.mjs so the rspack and Vite
 * paths execute identical logic and cross-tool comparison stays meaningful.
 *
 * Registers at the processAssets stage that matches the cost shape being
 * modelled (see stageFor), so the synthetic plugin sits in the same part of
 * the pipeline as the real plugins it stands in for.
 *
 * Enabled only by BENCH_PLUGIN; when unset, generated configs omit the plugin
 * entirely rather than registering one that returns immediately, because an
 * inert tap is itself a measurable cost at this asset count.
 */
import { applyAssetWork, pluginSpecFromEnv, stageFor } from './plugin-core.mjs';

export class SyntheticAssetPlugin {
  constructor(spec) {
    this.spec = spec ?? pluginSpecFromEnv();
  }

  apply(compiler) {
    const spec = this.spec;
    if (!spec) return;
    const { Compilation, sources } = compiler.webpack ?? compiler.rspack ?? {};
    compiler.hooks.compilation.tap('SyntheticAssetPlugin', (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        { name: 'SyntheticAssetPlugin', stage: stageFor(spec.kind) },
        async (assets) => {
          const list = Object.keys(assets).map((name) => ({
            name,
            source: compilation.getAsset(name)?.source?.source?.().toString() ?? '',
          }));
          const changed = await applyAssetWork(list, spec);
          const RawSource = sources?.RawSource ?? Compilation?.PROCESS_ASSETS_STAGE_ADDITIONAL;
          for (const c of changed) {
            if (typeof RawSource === 'function') {
              compilation.updateAsset(c.name, new RawSource(c.source));
            }
          }
        }
      );
    });
  }
}

export default SyntheticAssetPlugin;
