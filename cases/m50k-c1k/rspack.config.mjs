import path from 'node:path';
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

// Extra splitChunks cacheGroups, off unless BENCH_CACHE_GROUPS is set.
//
// Every cacheGroup's `test` is evaluated against every module, so N groups on
// an M-module graph is N*M evaluations before a single chunk is formed. This
// dial isolates that evaluation cost: the generated groups are written to match
// NOTHING, so chunk count is unchanged and the only thing measured is the cost
// of asking.
//
// BENCH_CACHE_GROUP_TESTS selects how the question is asked:
//   'regex'    (default) a RegExp, which the bundler can evaluate natively
//   'function' a JS predicate, which must cross into JavaScript per module
// The difference between those two is the point of the dial.
const extraGroupCount = Number(process.env.BENCH_CACHE_GROUPS || 0);
const groupTestKind = process.env.BENCH_CACHE_GROUP_TESTS || 'regex';
const extraCacheGroups = {};
for (let i = 0; i < extraGroupCount; i++) {
  extraCacheGroups['synthetic' + i] = {
    // Distinct per group so no engine-level regex cache can serve them all
    // from one compiled pattern, which would flatten the very curve being
    // measured.
    test:
      groupTestKind === 'function'
        ? (module) => (module.resource || '').includes('__never_matches_' + i + '__')
        : new RegExp('__never_matches_' + i + '__'),
    chunks: 'all',
    minSize: 0,
    minChunks: 1,
    priority: -100 - i,
  };
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
              test: /\.jsx?$/,
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
        ...extraCacheGroups,
        vendorCliques: {
          test: /[\\/]vendors[\\/]/,
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
