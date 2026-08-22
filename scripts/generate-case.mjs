/**
 * Chunk count is produced by distinct vendor consumer-sets ("cliques"), one
 * chunk each, plus one chunk per route plus the entry:
 *   chunks  = cliques + routes + 1
 *   modules = cliques*modulesPerVendor + appModules + routes + 1
 */
export function computeCaseShape({ targetModules, targetChunks, routes, modulesPerVendor }) {
  const cliques = targetChunks - routes - 1;
  // Benchmark-specific rule, stricter than the bare formula above: a case
  // must contain at least one vendor clique. The formula alone would
  // tolerate cliques === 0 (or negative), but this generator always rejects
  // shapes with zero vendor chunks.
  if (cliques < 1) {
    throw new RangeError(`targetChunks ${targetChunks} too small for ${routes} routes`);
  }
  // Each clique is a distinct non-empty subset of routes, encoded in binary,
  // so we need enough routes to encode `cliques` distinct values.
  // Assumes routes < 54: beyond that, float64 precision makes `2 ** routes - 1`
  // indistinguishable from `2 ** routes`, and at routes >= 1024 the expression
  // overflows to Infinity, so the guard silently stops firing. Unreachable for
  // realistic cases (routes is 100-300, cliques ~700-9700), but the assumption
  // should be stated explicitly.
  if (cliques > 2 ** routes - 1) {
    throw new RangeError(`${routes} routes cannot encode ${cliques} distinct cliques`);
  }
  const vendorModules = cliques * modulesPerVendor;
  const appModules = targetModules - vendorModules - routes - 1;
  if (appModules < 0) {
    throw new RangeError(
      `vendor modules (${vendorModules}) exceed module budget ${targetModules}`
    );
  }
  return {
    routes,
    cliques,
    modulesPerVendor,
    vendorModules,
    appModules,
    totalModules: vendorModules + appModules + routes + 1,
    totalChunks: cliques + routes + 1,
  };
}
