import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  build: {
    // Minification is mandatory, for the same reason rspack.config.mjs's
    // optimization.minimize: true is mandatory there (a sibling config file
    // generated alongside this one, not a section of this file): with it
    // off, per-chunk cost is understated by orders of magnitude and the
    // benchmark measures the wrong thing.
    minify: true,
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
