import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  context: __dirname,
  entry: { main: './src/index.jsx' },
  resolve: { extensions: ['.js', '.jsx'] },
  output: { path: path.join(__dirname, 'dist'), clean: true },
  optimization: {
    // Minification is mandatory: with it off, per-chunk cost is understated
    // by orders of magnitude and the benchmark measures the wrong thing.
    minimize: true,
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
