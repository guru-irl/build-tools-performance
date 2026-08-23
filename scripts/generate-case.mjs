/**
 * Chunk count is produced by distinct vendor consumer-sets ("cliques"), one
 * chunk each, plus one chunk per route plus the entry:
 *   chunks  = cliques + routes + 1
 *   modules = (cliques + collisionVendors)*modulesPerVendor + appModules + routes + 1
 *
 * collisionVendors (default 0) are extra vendor packages that deliberately
 * REUSE an existing clique's route subset instead of getting a distinct one
 * of their own (see generateCase, which wires them onto subsets[0]). A
 * nameless splitChunks cache group emits one chunk per distinct consumer-
 * set, so vendors sharing a subset merge into the chunk that subset already
 * produces: collision vendors add modules to the build but never add
 * chunks. This is the positive control proving chunk count tracks distinct
 * cliques rather than merely counting vendor directories (see the
 * collision-control test in test/build.test.mjs).
 */
export function computeCaseShape({
  targetModules, targetChunks, routes, modulesPerVendor, collisionVendors = 0, moduleBytes = 0,
}) {
  // Each vendor writes modulesPerVendor files unconditionally (the leaf loop
  // runs k-1 times, plus index.js always). k <= 0 does not throw naturally:
  // the leaf loop just runs zero times, so vendorModules undercounts the
  // on-disk file count by exactly `cliques` (one stray index.js per vendor).
  if (modulesPerVendor < 1) {
    throw new RangeError(`modulesPerVendor ${modulesPerVendor} must be >= 1`);
  }
  // Unlike every other parameter here, collisionVendors previously had no
  // guard at all. A non-integer or negative value does not throw naturally:
  // it silently corrupts the `(cliques + collisionVendors) * modulesPerVendor`
  // arithmetic below instead. Two failure shapes matter:
  //   - collisionVendors=-1 or 2.5: vendorModules/totalModules quietly drift
  //     off, without ever raising, so the totalModules == on-disk-modules
  //     identity this generator promises silently breaks.
  //   - collisionVendors='3' (a string): `cliques + collisionVendors` is
  //     STRING CONCATENATION (47 + '3' -> '473', not 50), which DOES throw,
  //     but as a confusing "vendor modules exceed module budget" RangeError
  //     far from the real problem. This matters because case.params.json
  //     round-trips this parameter as JSON, so a hand-authored
  //     "collisionVendors": "3" hits exactly this path.
  if (!Number.isInteger(collisionVendors) || collisionVendors < 0) {
    throw new RangeError(`collisionVendors ${collisionVendors} must be a non-negative integer`);
  }
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
  // collisionVendors are NOT part of `cliques` -- assignCliques still only
  // ever allocates `cliques` distinct subsets (see generateCase). They are
  // extra vendor packages layered on top that each reuse subsets[0], so they
  // count toward vendorModules (real files, real modules) but never toward
  // totalChunks below.
  const vendorModules = (cliques + collisionVendors) * modulesPerVendor;
  const appModules = targetModules - vendorModules - routes - 1;
  if (appModules < 0) {
    throw new RangeError(
      `vendor modules (${vendorModules}) exceed module budget ${targetModules}`
    );
  }
  return {
    routes,
    cliques,
    collisionVendors,
    modulesPerVendor,
    vendorModules,
    appModules,
    // Approximate source bytes per generated leaf module. 0 (the default)
    // means "emit the original bodies unchanged", which is what keeps every
    // previously published case byte-identical.
    moduleBytes,
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
    // The lower bound of 1 matters at routes=1, where routes-1 is 0: the step
    // is meaningless for a single route but the loop must still run once to
    // emit the only subset that exists, {0}. Without it assignCliques(1, 1)
    // threw "could not allocate", making routes=1 cases impossible to generate.
    const maxStep = Math.max(1, routes - 1);
    for (let d = 1; d <= maxStep && remaining > 0; d++) {
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

import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// Non-trivial body: real imports, a component, and enough surface that the
// minifier and transformer have actual work to do. Files are block-padded to
// 4 KB on disk anyway, so this weight is free.
/**
 * Deterministic filler code used by the module-size dial.
 *
 * Three properties matter, and each rules out a simpler implementation:
 *
 *  1. It must survive TREE-SHAKING. Padding that nothing references is deleted
 *     before it reaches an output chunk, so the dial would move source bytes on
 *     disk while leaving emitted bytes unchanged. Every generated helper is
 *     therefore reachable from the module's exported entry point.
 *  2. It must survive MINIFICATION. Constant expressions get folded, so the
 *     helpers do arithmetic on their runtime argument rather than on literals.
 *  3. It must be real CODE, not a blob of string literals. The point of this
 *     dial is to give the asset stage genuine work -- parsing, renaming,
 *     rewriting -- and an opaque string constant is copied through almost for
 *     free while inflating byte counts, which would make the dial look
 *     effective while modelling nothing.
 *
 * Returns roughly `count` helpers plus an aggregator that calls all of them.
 */
function fillerBody(tag, count) {
  if (count <= 0) return { code: '', call: '' };
  const helpers = Array.from({ length: count }, (_, j) => {
    // Constants vary per helper so no two bodies are identical: identical
    // bodies would let a minifier or bundler share a single copy, which would
    // silently break the linearity of the dial.
    const a = 3 + ((j * 7) % 61);
    const b = 0x9e37 + j * 131;
    return `function ${tag}_h${j}(x) {
  const s${j} = ((x + ${a}) * ${a}) ^ ${b};
  const t${j} = String(s${j}).split('').reverse().join('');
  const u${j} = t${j}.charCodeAt(0) + ${j};
  return { k: '${tag}_${j}', s: s${j}, t: t${j}, u: u${j} };
}`;
  }).join('\n');
  const list = Array.from({ length: count }, (_, j) => `${tag}_h${j}(x)`).join(', ');
  return {
    code: `${helpers}\nfunction ${tag}_all(x) {\n  const rows = [${list}];\n  return rows.reduce((acc, r) => acc + r.u, 0);\n}\n`,
    call: `${tag}_all`,
  };
}

/**
 * Number of filler helpers needed to reach `targetBytes` of source. Measured
 * once against a real generated helper rather than guessed; see
 * test/shape.test.mjs for the assertion that keeps this honest.
 */
const FILLER_BYTES_PER_HELPER = 190;

export function fillerCountForBytes(targetBytes, baseBytes = 0) {
  if (!targetBytes || targetBytes <= baseBytes) return 0;
  return Math.max(0, Math.round((targetBytes - baseBytes) / FILLER_BYTES_PER_HELPER));
}

function vendorModuleBody(v, m, moduleBytes = 0) {
  const base = `const PREFIX_${m} = 'v${v}_i${m}';
`;
  const filler = fillerBody(`f${v}_${m}`, fillerCountForBytes(moduleBytes, 400));
  return `${base}${filler.code}export function compute${m}(input) {
  const parts = String(input).split('').map((c, i) => c.charCodeAt(0) + i);
  const total = parts.reduce((a, b) => a + b, 0)${filler.call ? ` + ${filler.call}(parts.length)` : ''};
  return { id: PREFIX_${m}, total, parts: parts.slice(0, 4) };
}
export const meta${m} = { name: PREFIX_${m}, version: '1.0.${m}', pure: true };
export default compute${m};
`;
}

function vendorIndexBody(v, k) {
  const imports = Array.from({ length: k - 1 }, (_, m) =>
    `import compute${m}, { meta${m} } from './i${m}.js';`).join('\n');
  const uses = Array.from({ length: k - 1 }, (_, m) => `compute${m}(seed)`).join(', ');
  const metas = Array.from({ length: k - 1 }, (_, m) => `meta${m}`).join(', ');
  return `${imports}
const NAME = 'vendor_${v}';
export function vendor${v}(seed = ${v}) {
  const results = [${uses}];
  const metas = [${metas}];
  return { name: NAME, results, metas, checksum: results.reduce((a, r) => a + r.total, 0) };
}
export default vendor${v};
`;
}

function appComponentBody(i, moduleBytes = 0) {
  const filler = fillerBody(`c${i}`, fillerCountForBytes(moduleBytes, 400));
  return `import React from 'react';
const LABEL_${i} = 'component_${i}';
${filler.code}export function Component${i}({ value = ${i}, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_${i}, value, doubled: value * 2${filler.call ? ` + ${filler.call}(value)` : ''} }), [value]);
  return React.createElement('div', { className: LABEL_${i}, 'data-value': derived.doubled }, children);
}
export default Component${i};
`;
}

function routeBody(r, vendorIds, componentIds) {
  const vImports = vendorIds.map((v) => `import vendor${v} from '../vendors/v${v}/index.js';`).join('\n');
  const cImports = componentIds.map((c) => `import Component${c} from '../components/c${c}.jsx';`).join('\n');
  const vCalls = vendorIds.map((v) => `vendor${v}()`).join(', ');
  const cEls = componentIds.map((c) => `React.createElement(Component${c}, { key: ${c} })`).join(', ');
  return `import React from 'react';
${vImports}
${cImports}
export function Route${r}() {
  const data = [${vCalls}];
  return React.createElement('section', { className: 'route_${r}', 'data-n': data.length }, [${cEls}]);
}
export default Route${r};
`;
}

// The entry is real dispatch logic, not a bare list of import() statements:
// a route registry plus a resolver/mount function that actually calls the
// loaders. Every route id still gets its own static `import('./routes/rN.jsx')`
// call site (so bundlers still split one chunk per route) but the file does
// real work, clearing the 200-byte non-trivial-module floor at any routes
// count, including routes=1 (a bare `import()` line is ~27 bytes there).
//
// The generated file also CALLS mount() at its own top level -- not just
// defines it. rspack/webpack always retain an entry's full body regardless,
// but Rollup/Rolldown default to `preserveEntrySignatures: false` for app
// builds (confirmed by reading vite's own resolved build options), which
// tree-shakes a module's exports whenever nothing observably uses them. An
// entry that only defines and exports resolveRoute/dispatch/mount without
// ever calling any of them has zero top-level side effects, so a real Vite
// build discarded the entire ROUTES registry -- and every dynamic import()
// inside it -- as dead code: measured directly, a 400-module/80-chunk case
// collapsed to exactly 1 emitted chunk of 0 bytes instead of ~80. Calling
// mount() (which reads ROUTES via Object.keys, forcing the whole object to
// stay reachable) is what a real app's bootstrap file does anyway -- this
// is a realism fix, not a bundler-specific workaround, so it belongs here
// rather than as a special case in either bundler's config.
export function entryBody(routes) {
  const registry = Array.from({ length: routes }, (_, r) =>
    `  ${r}: () => import('./routes/r${r}.jsx'),`).join('\n');
  return `// Route registry: maps a numeric route id to a loader that dynamically
// imports that route's module, so the bundler still splits one chunk per
// route while this entry does real dispatch work instead of being a bare
// list of import() statements.
const ROUTES = {
${registry}
};

export function resolveRoute(id) {
  const loader = ROUTES[id];
  if (typeof loader !== 'function') {
    throw new RangeError(\`unknown route id: \${id}\`);
  }
  return loader();
}

export function dispatch(path) {
  const ids = Object.keys(ROUTES).map(Number);
  const n = ids.length;
  const parsed = Number.parseInt(String(path).replace(/^\\//, ''), 10);
  const safe = Number.isInteger(parsed) ? ((parsed % n) + n) % n : 0;
  return resolveRoute(ids[safe]);
}

export default function mount(root) {
  const ids = Object.keys(ROUTES).map(Number).sort((a, b) => a - b);
  const checksum = ids.reduce((acc, id) => acc + id, 0);
  return { root, count: ids.length, checksum, dispatch };
}

// Actually run the entry -- see the comment on entryBody() above for why this
// call (not just the definitions above it) is required for a real Vite build
// to keep the route registry instead of tree-shaking it away.
mount('root');
`;
}

// This config is identical for every case: it depends only on the fixed
// directory layout generateCase always produces (src/index.jsx entry,
// src/vendors/<name>/ packages), never on params. __dirname is computed from
// this file's own on-disk location (import.meta.url), which is wherever
// generateCase wrote it, so context/output.path are correct without templating.
const RSPACK_CONFIG = `import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Locates scripts/synthetic-loader.mjs by walking upward from this config.
// Deliberately NOT an absolute path baked in at generation time: cases are
// committed to a public repository, and a generated absolute path would
// publish the generating machine's directory layout. Walking up also keeps
// committed cases and on-demand generated cases working from any depth.
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

// Per-module loader work, off unless BENCH_LOADER is set. When it is unset the
// module.rules entry is omitted ENTIRELY rather than pointing at a loader that
// returns its input: a JS loader that does nothing still costs a boundary
// crossing per module, and that crossing is one of the things this benchmark
// measures, so it must never be silently present in the default build.
const loaderSpec = process.env.BENCH_LOADER;

// Per-ASSET work, off unless BENCH_PLUGIN is set. Distinct from the loader dial
// above: loader work happens during make, while this runs in the asset stage
// over emitted bundles, which is where large real applications spend most of
// their seal time. Registered at the processAssets stage matching the cost
// shape being modelled.
const pluginSpec = process.env.BENCH_PLUGIN;
let assetPlugins = [];
if (pluginSpec) {
  const mod = await import(pathToFileURL(findUp(path.join('scripts', 'synthetic-plugin.mjs'))).href);
  assetPlugins = [new mod.SyntheticAssetPlugin()];
}

export default {
  mode: 'production',
  context: __dirname,
  entry: { main: './src/index.jsx' },
  resolve: { extensions: ['.js', '.jsx'] },
  output: { path: path.join(__dirname, 'dist'), clean: true },
  ...(assetPlugins.length ? { plugins: assetPlugins } : {}),
  ...(loaderSpec
    ? {
        module: {
          rules: [
            {
              test: /\\.jsx?$/,
              use: [{ loader: findUp(path.join('scripts', 'synthetic-loader.mjs')) }],
            },
          ],
        },
      }
    : {}),
  // Build-time levers. Both DEFAULT to the mandatory benchmark configuration
  // (minify on, source maps off), so an unset environment reproduces the
  // published numbers exactly. They exist only so a controlled experiment can
  // vary one factor at a time against the same checked-in case, without
  // regenerating sources. Never publish a headline build time with a
  // non-default lever set.
  // Off by default. Turning this on is what BENCH_SOURCEMAP measures: source
  // map generation is not a fixed add-on cost, it also inflates the cost of
  // minification, because the minifier must additionally track and remap
  // every position it rewrites.
  devtool: process.env.BENCH_SOURCEMAP === '1' ? 'source-map' : false,
  optimization: {
    // Minification is mandatory in the default configuration: with it off,
    // per-chunk cost is understated by orders of magnitude and the benchmark
    // measures the wrong thing. BENCH_MINIFY=0 exists only to size that
    // effect deliberately, never to make the benchmark look fast.
    minimize: process.env.BENCH_MINIFY !== '0',
    splitChunks: {
      chunks: 'all',
      // minSize: 0 is required at both levels below. A nonzero minSize
      // merges small chunks together, silently breaking the chunk-count
      // identity this generator promises (chunks = cliques + routes + 1).
      // How much this collapses the chunk count is shape-dependent --
      // observed effects have ranged from negligible to substantial
      // depending on the case -- so no single multiplier is asserted here.
      minSize: 0,
      cacheGroups: {
        // The built-in groups must be disabled, or they compete with
        // vendorCliques below and absorb some vendor modules into their own,
        // differently-shaped chunks.
        default: false,
        defaultVendors: false,
        vendorCliques: {
          test: /[\\\\/]vendors[\\\\/]/,
          chunks: 'all',
          minSize: 0,
          minChunks: 1,
          priority: -10,
          // NO name here. A nameless cache group emits one chunk per distinct
          // set of consuming chunks; assignCliques() guarantees every vendor
          // package is imported by a distinct subset of routes, so distinct
          // subsets produce exactly one chunk per vendor package -- this is
          // what makes chunk count a dial. Giving this group a fixed name
          // instead collapses many vendors into a shared handful of chunks
          // and destroys that property.
        },
      },
    },
  },
};
`;

// Counterpart to RSPACK_CONFIG: same fixed directory layout, same __dirname
// trick, so it too needs no per-case templating and stays trivially
// deterministic (a static string, no RNG/Date/crypto).
//
// Deliberately NOT configured: manualChunks. Rollup/Rolldown (what Vite
// builds with) groups modules by reachability signature -- the set of
// entries/dynamic-import boundaries that reach a module -- which is
// natively the same clique grouping this generator synthesizes. rspack
// needs the explicit nameless cacheGroup above to get the same grouping;
// Vite/Rolldown does not need any equivalent config. That asymmetry is the
// finding this benchmark measures, so hand-writing a manualChunks function
// to force Vite's count to match rspack's exactly would destroy the thing
// being measured. See test/build.test.mjs (VITE_CHUNK_TOLERANCE and
// CROSS_TOOL_RELATIVE_TOLERANCE) for the real, measured chunk counts and
// the tolerances those measurements justify.
//
// Also deliberately NOT configured: any JSX/babel/swc transform plugin, and
// no resolve.extensions override. Generated components call
// React.createElement directly (see appComponentBody/routeBody/entryBody
// above) -- there is no JSX syntax anywhere in generated sources -- and
// '.jsx' is already in Vite's own default resolve.extensions, so nothing
// needs transforming or reconfiguring to resolve it (confirmed directly: a
// real build of a generated case resolves and bundles every .jsx file with
// zero plugins and zero resolve config).
const VITE_CONFIG = `import path from 'node:path';
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
      if (!/\\.jsx?$/.test(id)) return null;
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
`;

export function generateCase(params, outDir) {
  const shape = computeCaseShape(params);
  const { routes, cliques, collisionVendors, modulesPerVendor: k, appModules, moduleBytes } = shape;
  const subsets = assignCliques(cliques, routes);

  // Regenerating into an existing outDir must not leave modules from a
  // previous (e.g. larger) generation on disk: a param change alone would
  // otherwise silently mix stale files into the current case.
  rmSync(path.join(outDir, 'src'), { recursive: true, force: true });

  mkdirSync(path.join(outDir, 'src/vendors'), { recursive: true });
  mkdirSync(path.join(outDir, 'src/routes'), { recursive: true });
  mkdirSync(path.join(outDir, 'src/components'), { recursive: true });

  const routeVendors = Array.from({ length: routes }, () => []);
  for (let v = 0; v < cliques; v++) {
    const dir = path.join(outDir, `src/vendors/v${v}`);
    mkdirSync(dir, { recursive: true });
    for (let m = 0; m < k - 1; m++) {
      writeFileSync(path.join(dir, `i${m}.js`), vendorModuleBody(v, m, moduleBytes));
    }
    writeFileSync(path.join(dir, 'index.js'), vendorIndexBody(v, k));
    for (const r of subsets[v]) routeVendors[r].push(v);
  }

  // Collision vendors: extra vendor packages beyond the `cliques` distinct
  // ones above, indexed contiguously after them. Each one deliberately
  // reuses subsets[0] -- the FIRST clique's exact route subset -- instead of
  // being allocated a subset of its own (which is what assignCliques(cliques,
  // routes) above already guarantees is distinct for v < cliques). Sharing
  // subsets[0] exactly means every collision vendor has the identical
  // consumer-set to clique 0, so the nameless splitChunks cache group (see
  // RSPACK_CONFIG below) merges all of them into the ONE chunk that subset
  // already produces -- they add real vendor modules to the build without
  // adding a single chunk. This must run BEFORE the route-body loop below,
  // so every route in subsets[0] imports the collision vendors too.
  for (let c = 0; c < collisionVendors; c++) {
    const v = cliques + c;
    const dir = path.join(outDir, `src/vendors/v${v}`);
    mkdirSync(dir, { recursive: true });
    for (let m = 0; m < k - 1; m++) {
      writeFileSync(path.join(dir, `i${m}.js`), vendorModuleBody(v, m, moduleBytes));
    }
    writeFileSync(path.join(dir, 'index.js'), vendorIndexBody(v, k));
    for (const r of subsets[0]) routeVendors[r].push(v);
  }

  // App components are route-private: each belongs to exactly one route, so
  // they add modules without creating new cliques.
  const routeComponents = Array.from({ length: routes }, () => []);
  for (let c = 0; c < appModules; c++) {
    writeFileSync(path.join(outDir, `src/components/c${c}.jsx`), appComponentBody(c, moduleBytes));
    routeComponents[c % routes].push(c);
  }

  for (let r = 0; r < routes; r++) {
    writeFileSync(
      path.join(outDir, `src/routes/r${r}.jsx`),
      routeBody(r, routeVendors[r], routeComponents[r])
    );
  }

  const entry = entryBody(routes);
  writeFileSync(path.join(outDir, 'src/index.jsx'), entry);

  writeFileSync(path.join(outDir, 'case.params.json'), JSON.stringify(params, null, 2) + '\n');
  writeFileSync(path.join(outDir, 'index.html'),
    '<!doctype html><html><body><div id="root"></div><script type="module" src="/src/index.jsx"></script></body></html>\n');

  // See RSPACK_CONFIG above for why this is a static template.
  writeFileSync(path.join(outDir, 'rspack.config.mjs'), RSPACK_CONFIG);
  // See VITE_CONFIG above for why this is a static template, and why it has
  // no manualChunks and no transform plugin.
  writeFileSync(path.join(outDir, 'vite.config.mjs'), VITE_CONFIG);

  return shape;
}
