/**
 * Shared work core for the synthetic asset-stage (processAssets) plugin
 * taxonomy.
 *
 * WHY THIS EXISTS, SEPARATELY FROM THE LOADER TAXONOMY. Loader work happens
 * during `make`, while each module is built. But on large real applications the
 * dominant phase is not make -- it is the asset stage, where plugins run over
 * the EMITTED BUNDLES rather than over source modules. Loader categories can
 * make a synthetic build slower, but they push the time into make and emit,
 * moving the phase distribution further from a real application's rather than
 * closer to it. Modelling the asset stage needs its own dial.
 *
 * Categories, each isolating a cost shape observable in real builds:
 *
 *   asset-scan       Read every emitted asset and checksum it, rewriting
 *                    nothing. The floor cost of any plugin that merely
 *                    inspects output.
 *   asset-rewrite    Regex scan and patch every emitted asset. Models the very
 *                    common "walk every bundle and substitute a marker"
 *                    plugin, e.g. injecting a manifest or localisation table.
 *   asset-transform  Parse and regenerate every emitted asset. Models the
 *                    minifier-shaped cost: work proportional to emitted bytes,
 *                    not to module count.
 *   asset-summarize  Build one aggregate structure over all assets. Models
 *                    manifest/report plugins whose cost is whole-graph rather
 *                    than per-asset.
 *
 * Cost here scales with EMITTED BYTES, which is why it pairs with the
 * moduleBytes generator dial: a case with many tiny modules has little asset
 * work to do no matter how many assets it emits.
 */

export const PLUGIN_CATEGORIES = ['asset-scan', 'asset-rewrite', 'asset-transform', 'asset-summarize'];

/** Parses a spec like "asset-rewrite:3" into { kind, arg }. */
export function parsePluginSpec(spec) {
  if (!spec) return null;
  const [kind, rawArg] = String(spec).split(':');
  const arg = rawArg === undefined ? null : Number(rawArg);
  if (rawArg !== undefined && !Number.isFinite(arg)) {
    throw new Error(`invalid plugin spec argument in "${spec}"`);
  }
  return { kind, arg };
}

export function pluginSpecFromEnv(env = process.env) {
  const spec = parsePluginSpec(env.BENCH_PLUGIN);
  if (!spec) return null;
  const passes = Number(env.BENCH_PLUGIN_PASSES || 1);
  return { ...spec, passes: Number.isFinite(passes) && passes > 0 ? passes : 1 };
}

/** Which processAssets stage a category belongs at, mirroring real plugins. */
export function stageFor(kind) {
  switch (kind) {
    case 'asset-transform':
      return 400; // OPTIMIZE_SIZE, where minifiers run
    case 'asset-rewrite':
      return 1000; // SUMMARIZE, where bundle-patching plugins run
    case 'asset-summarize':
      return 5000; // REPORT, where manifest/report plugins run
    default:
      return 1000;
  }
}

let _vite = null;
async function vite() {
  if (!_vite) _vite = await import('vite');
  return _vite;
}

function checksum(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

/**
 * Applies one pass of asset-stage work.
 *
 * `assets` is an array of { name, source }. Returns an array of
 * { name, source } for entries whose contents changed, so a caller only has to
 * write back what actually moved.
 */
export async function applyAssetOnce(assets, spec, passIndex = 0) {
  const changed = [];
  switch (spec.kind) {
    case 'asset-scan': {
      let acc = 0;
      for (const a of assets) acc = (acc + checksum(a.source)) >>> 0;
      // Returned via a side channel so the work cannot be optimised away.
      applyAssetOnce.lastChecksum = acc;
      return changed;
    }

    case 'asset-rewrite': {
      const n = spec.arg ?? 1;
      for (const a of assets) {
        let out = a.source;
        for (let i = 0; i < n; i++) {
          // Two scans and a substitution: the shape of a plugin that hunts for
          // a marker across every bundle and patches it.
          const hits = (out.match(/function/g) || []).length;
          out = out.replace(/\/\*__BENCH_MARKER__\*\//g, `/*${passIndex}:${i}*/`);
          out += `\n/*r${passIndex}_${i}_${hits}*/`;
        }
        changed.push({ name: a.name, source: out });
      }
      return changed;
    }

    case 'asset-transform': {
      const v = await vite();
      for (const a of assets) {
        // Only JS assets can be parsed; anything else is passed through, which
        // is also what a real minifier does.
        if (!/\.(js|mjs|cjs)$/.test(a.name)) continue;
        try {
          const out = await v.transformWithOxc(a.source, a.name.replace(/[^\w.]/g, '_'));
          changed.push({ name: a.name, source: out?.code ?? a.source });
        } catch {
          // A bundle that fails to parse standalone is skipped rather than
          // failing the build; the cost of attempting it has still been paid.
        }
      }
      return changed;
    }

    case 'asset-summarize': {
      const manifest = {};
      for (const a of assets) {
        manifest[a.name] = { bytes: a.source.length, sum: checksum(a.source) };
      }
      applyAssetOnce.lastManifest = manifest;
      return changed;
    }

    default:
      throw new Error(`unknown plugin category: ${spec.kind} (known: ${PLUGIN_CATEGORIES.join(', ')})`);
  }
}

/** Applies `spec.passes` passes of asset-stage work. */
export async function applyAssetWork(assets, spec) {
  let current = assets;
  let changed = [];
  for (let i = 0; i < (spec.passes ?? 1); i++) {
    const out = await applyAssetOnce(current, spec, i);
    if (out.length) {
      const byName = new Map(current.map((a) => [a.name, a]));
      for (const c of out) byName.set(c.name, c);
      current = [...byName.values()];
      changed = out;
    }
  }
  return changed;
}
