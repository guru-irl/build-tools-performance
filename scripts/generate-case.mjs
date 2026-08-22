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
  // Each clique is a distinct non-empty subset of routes. The number of
  // available distinct subsets is 2^routes - 1, but this generator uses only
  // small subsets (sizes 1..4, see assignCliques), so the practical ceiling is
  // the sum of C(routes, s) for s in 1..4 — vastly more than any real case
  // needs (routes=300 gives >3.3e8). The cheap bound below is kept as a coarse
  // sanity guard; assignCliques throws precisely if it cannot allocate.
  // Note routes < 54 for this expression to be exact in float64, and at
  // routes >= 1024 it overflows to Infinity and stops firing. Unreachable for
  // realistic cases (routes is 100-300, cliques ~700-9700).
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

/** Binomial coefficient C(n, k) as BigInt. Exact at any size we need. */
function binom(n, k) {
  if (k < 0 || k > n) return 0n;
  let r = 1n;
  const kk = BigInt(Math.min(k, n - k));
  for (let i = 0n; i < kk; i++) {
    r = (r * BigInt(n - Number(i))) / (i + 1n);
  }
  return r;
}

/** Greatest common divisor for BigInt. */
function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

/**
 * The `rank`-th size-`k` subset of [0, n) in lexicographic order
 * (combinatorial number system unranking). Returns ascending indices.
 */
function unrankCombination(rank, n, k) {
  const out = [];
  let r = rank;
  let x = 0;
  for (let i = 0; i < k; i++) {
    for (;;) {
      const c = binom(n - x - 1, k - i - 1);
      if (r < c) break;
      r -= c;
      x++;
    }
    out.push(x);
    x++;
  }
  return out;
}

// How cliques are spread across subset sizes. Sizes 1..4 give a mix of
// route-private vendors and vendors shared by 2-4 routes. Subsets of
// different sizes can never collide, so distinctness only has to hold
// within a size bucket.
const SIZE_MIX = [
  { size: 1, weight: 0.2 },
  { size: 2, weight: 0.4 },
  { size: 3, weight: 0.25 },
  { size: 4, weight: 0.15 },
];

/**
 * Assign each vendor package a distinct, non-empty subset of routes. Index i
 * is the sorted route-index array for vendor i.
 *
 * Distinctness is what makes chunk count a dial: a cache group with no name
 * emits one chunk per distinct set of consuming chunks, so distinct subsets
 * give exactly one chunk per vendor package.
 *
 * Subsets are arithmetic progressions mod `routes`: starting route `i`, step
 * `d`, length `s`. Sweeping `i` across all routes for each `d` touches every
 * route equally often, so vendor load spreads uniformly across the route
 * surface. Distinctness is enforced explicitly with a seen-set rather than
 * argued from construction.
 *
 * Two earlier approaches were rejected by measurement:
 *   - bits of (i+1): distinct, but only log2(cliques) routes ever appear. At
 *     cliques=9699 / routes=300 just 14 routes carried any vendor, 286 carried
 *     none, and route 0 alone imported half the vendor graph.
 *   - lexicographic unranking of the combinatorial number system: uses every
 *     route, but lex order front-loads low indices, leaving load between 12 and
 *     2836 for the same case.
 *
 * Deterministic: no RNG, no clock, no closure state.
 */
export function assignCliques(cliques, routes) {
  const capacity = SIZE_MIX.map((m) => binom(routes, m.size));
  const alloc = SIZE_MIX.map((m, i) => {
    const want = BigInt(Math.floor(cliques * m.weight));
    return want < capacity[i] ? want : capacity[i];
  });

  let assigned = alloc.reduce((a, b) => a + b, 0n);
  for (let i = SIZE_MIX.length - 1; i >= 0 && assigned < BigInt(cliques); i--) {
    const spare = capacity[i] - alloc[i];
    const need = BigInt(cliques) - assigned;
    const take = need < spare ? need : spare;
    alloc[i] += take;
    assigned += take;
  }
  if (assigned < BigInt(cliques)) {
    throw new RangeError(`${routes} routes cannot supply ${cliques} distinct cliques`);
  }

  const out = [];
  const seen = new Set();
  for (let b = 0; b < SIZE_MIX.length; b++) {
    const size = SIZE_MIX[b].size;
    let remaining = Number(alloc[b]);
    // d is the progression step; sweeping i over every route for each d keeps
    // per-route load even. d stops at routes-1 because larger steps repeat.
    for (let d = 1; d < routes && remaining > 0; d++) {
      for (let i = 0; i < routes && remaining > 0; i++) {
        const subset = [];
        for (let t = 0; t < size; t++) subset.push((i + t * d) % routes);
        const uniq = [...new Set(subset)].sort((a, z) => a - z);
        if (uniq.length !== size) continue; // progression wrapped onto itself
        const key = uniq.join(',');
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(uniq);
        remaining--;
      }
    }
    if (remaining > 0) {
      throw new RangeError(`could not allocate ${remaining} subsets of size ${size}`);
    }
  }
  return out;
}
