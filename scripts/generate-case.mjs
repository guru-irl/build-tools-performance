/**
 * Chunk count is produced by distinct vendor consumer-sets ("cliques"), one
 * chunk each, plus one chunk per route plus the entry:
 *   chunks  = cliques + routes + 1
 *   modules = cliques*modulesPerVendor + appModules + routes + 1
 */
export function computeCaseShape({ targetModules, targetChunks, routes, modulesPerVendor }) {
  const cliques = targetChunks - routes - 1;
  if (cliques < 1) {
    throw new RangeError(`targetChunks ${targetChunks} too small for ${routes} routes`);
  }
  // Each clique is a distinct non-empty subset of routes, encoded in binary,
  // so we need enough routes to encode `cliques` distinct values.
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
