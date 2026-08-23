import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { generateCase, assignCliques, entryBody } from '../scripts/generate-case.mjs';

const PARAMS = {
  name: 'tiny', seed: 1, targetModules: 400, targetChunks: 60,
  routes: 12, modulesPerVendor: 4, collisionVendors: 0,
};

function countFiles(dir) {
  return execFileSync('find', [dir, '-type', 'f', '-name', '*.js*'], { encoding: 'utf8' })
    .trim().split('\n').filter(Boolean).length;
}

// Pure-Node recursive tree hash: no bash/find/shasum shell-out (which broke
// on outDir paths containing spaces -- `bash -c "cd ${d} && ..."` splits an
// unquoted path on whitespace, e.g. `cd: .tmp-review/dir: No such file or
// directory` for an outDir named '.tmp-review/dir with space'). Hashes every
// file's relative path and content, so both structure and bytes must match.
function hashTree(dir) {
  const files = readdirSync(dir, { recursive: true })
    .map((p) => p.split(path.sep).join('/'))
    .filter((p) => statSync(path.join(dir, p)).isFile())
    .sort();
  const hash = createHash('sha256');
  for (const file of files) {
    hash.update(file);
    hash.update('\0');
    hash.update(readFileSync(path.join(dir, file)));
  }
  return hash.digest('hex');
}

test('emits exactly totalModules source files', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    const shape = generateCase(PARAMS, dir);
    assert.equal(countFiles(path.join(dir, 'src')), shape.totalModules);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('module bodies are non-trivial (>= 200 bytes, real imports)', () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    generateCase(PARAMS, dir);
    const body = readFileSync(path.join(dir, 'src/vendors/v0/index.js'), 'utf8');
    assert.ok(body.length >= 200, `vendor body too small: ${body.length} bytes`);
    assert.match(body, /export default/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('vendor-clique fidelity: every route import matches assignCliques exactly', () => {
  // Guards against corrupting the vendor<->route wiring inside generateCase
  // (e.g. a mapping bug that funnels every vendor onto one route). That kind
  // of corruption does not change file counts or byte sizes, so only parsing
  // the actual import graph and comparing it to assignCliques's output can
  // catch it. Checked for EVERY vendor, not a sample.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    const params = { targetModules: 400, targetChunks: 80, routes: 20, modulesPerVendor: 4 };
    const shape = generateCase(params, dir);
    const expected = assignCliques(shape.cliques, shape.routes);
    assert.equal(expected.length, shape.cliques);

    const actual = Array.from({ length: shape.cliques }, () => []);
    for (let r = 0; r < shape.routes; r++) {
      const src = readFileSync(path.join(dir, `src/routes/r${r}.jsx`), 'utf8');
      for (const m of src.matchAll(/from '\.\.\/vendors\/v(\d+)\/index\.js'/g)) {
        actual[Number(m[1])].push(r);
      }
    }
    for (const list of actual) list.sort((a, b) => a - b);

    for (let v = 0; v < shape.cliques; v++) {
      assert.deepEqual(
        actual[v], expected[v],
        `vendor ${v}: routes importing it are [${actual[v]}], assignCliques says [${expected[v]}]`
      );
    }
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test("collision-vendor fidelity: every collision vendor is imported by exactly clique 0's route subset, at multiple counts", () => {
  // test/generate.test.mjs previously only ever pinned collisionVendors to 0
  // (see PARAMS above). This checks the actual ON-DISK wiring (not just
  // computeCaseShape's arithmetic, which never runs generateCase's own
  // wiring loops at all -- see test/shape.test.mjs's collisionVendors
  // coverage for that) at more than one nonzero count, so a break confined
  // to some counts (e.g. only above some threshold) cannot hide behind a
  // single parameter point. Checked for EVERY collision vendor at each
  // count, not a sample.
  const routes = 12, k = 4, cliques = 47;
  for (const collisionVendors of [3, 20]) {
    const dir = mkdtempSync(path.join(process.cwd(), `.tmp-gen-coll-${collisionVendors}-`));
    try {
      const targetModules = (cliques + collisionVendors) * k + routes + 1 + 50;
      const targetChunks = cliques + routes + 1;
      const shape = generateCase({ targetModules, targetChunks, routes, modulesPerVendor: k, collisionVendors }, dir);
      assert.equal(shape.cliques, cliques, 'fixture sanity: cliques must not depend on collisionVendors');
      const subsets = assignCliques(shape.cliques, shape.routes);
      const expectedRoutes = [...subsets[0]].sort((a, b) => a - b);

      for (let c = 0; c < collisionVendors; c++) {
        const v = shape.cliques + c;
        const importingRoutes = [];
        for (let r = 0; r < shape.routes; r++) {
          const src = readFileSync(path.join(dir, `src/routes/r${r}.jsx`), 'utf8');
          if (src.includes(`from '../vendors/v${v}/index.js'`)) importingRoutes.push(r);
        }
        assert.deepEqual(
          importingRoutes, expectedRoutes,
          `collisionVendors=${collisionVendors}: vendor v${v} imported by routes [${importingRoutes}], expected clique 0's subset [${expectedRoutes}]`
        );
      }
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
});

test('route privacy: every app component is imported by exactly one route', () => {
  // Guards against corrupting the component<->route wiring inside generateCase
  // (e.g. a mapping bug that fans every component out to every route, which
  // inflates dist size without changing file counts or byte sizes). Checked
  // for EVERY component; the count assertion below prevents the test from
  // passing vacuously if the regex silently matched nothing.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    const params = { targetModules: 400, targetChunks: 80, routes: 20, modulesPerVendor: 4 };
    const shape = generateCase(params, dir);
    assert.ok(shape.appModules > 0, 'fixture must actually have app components to check');

    const importerCount = new Map();
    for (let r = 0; r < shape.routes; r++) {
      const src = readFileSync(path.join(dir, `src/routes/r${r}.jsx`), 'utf8');
      for (const m of src.matchAll(/from '\.\.\/components\/c(\d+)\.jsx'/g)) {
        const c = Number(m[1]);
        importerCount.set(c, (importerCount.get(c) ?? 0) + 1);
      }
    }

    assert.equal(
      importerCount.size, shape.appModules,
      `checked ${importerCount.size} components, expected shape.appModules (${shape.appModules}); test must not pass vacuously on a subset`
    );
    for (const [c, count] of importerCount) {
      assert.equal(count, 1, `component c${c} is imported by ${count} routes, expected exactly 1`);
    }
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('regenerating a smaller case into the same dir leaves no orphaned modules', () => {
  // generateCase must not accumulate stale files from a previous, larger
  // generation into the same outDir (Task 8 regenerates into existing
  // cases/<name>/ dirs, so a param change must not silently leave stale
  // modules for the bundler to pick up and commit).
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    generateCase({ targetModules: 400, targetChunks: 60, routes: 12, modulesPerVendor: 4 }, dir);
    const smaller = generateCase({ targetModules: 250, targetChunks: 40, routes: 8, modulesPerVendor: 4 }, dir);
    assert.equal(
      countFiles(path.join(dir, 'src')), smaller.totalModules,
      'on-disk file count must match the SMALLER shape, not a leftover mix of both generations'
    );
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('entry module is non-trivial (>= 200 bytes) even at routes=1', () => {
  // The entry was pure `import('./routes/rN.jsx');` lines with no computation
  // -- 27 bytes at routes=1, and under 200 bytes for routes <= 7. Tested via
  // the pure entryBody(routes) helper directly (not generateCase): routes=1
  // forces cliques=1 (cliques = targetChunks - routes - 1 >= 1, and cliques
  // <= 2**routes-1 = 1), and assignCliques(1, 1) throws (its size-1 bucket's
  // `d < routes` allocation loop cannot iterate when routes=1) -- a
  // pre-existing, unrelated gap in assignCliques, which this task must not
  // modify. entryBody depends only on `routes`, so it is fully testable in
  // isolation without going through assignCliques at all.
  const body = entryBody(1);
  assert.ok(body.length >= 200, `entry body too small: ${body.length} bytes`);
  assert.match(body, /import\('\.\/routes\/r0\.jsx'\)/, 'entry must still dynamically import every route');
});

// Every config file generateCase emits, found generically rather than by a
// hard-coded filename list -- a fixed list (e.g. just 'rspack.config.mjs')
// silently stops covering a NEW emitted config the day one is added. This
// generator currently emits exactly two: rspack.config.mjs and
// vite.config.mjs.
function emittedConfigFiles(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.config.mjs'))
    .sort();
}

test('emitted *.config.mjs sources contain no nondeterministic time/random APIs', () => {
  // A static string is only actually deterministic if it stays a static
  // string. Injecting e.g. output.filename: `[id].${Date.now()}.js` (rspack)
  // or `// generated at ${Date.now()}` (vite) would leave every existing test
  // green (chunk counts, module counts, and file structure are all
  // unaffected) while making the BUILD nondeterministic across runs -- and,
  // for a template that is a module-level `const` evaluated once per
  // process (both RSPACK_CONFIG and VITE_CONFIG are), the SAME-PROCESS
  // byte-identical-tree test below cannot catch it either: every
  // generateCase() call in one process reuses the one value already baked
  // into the template at that process's first import, so two dirs generated
  // in the same `node --test` run hash identical even though two SEPARATE
  // processes would each bake in a different timestamp (verified directly:
  // two independent `node -e` processes generating the same params produced
  // two different `Date.now()` values in their emitted vite.config.mjs).
  // This is a cheap, build-free first line of defense that scans every
  // emitted config generically (not just rspack.config.mjs -- vite.config.mjs
  // needs exactly the same guard, and so would any future emitted config);
  // see the real double-build comparison in test/build.test.mjs for the
  // dynamic, build-based check.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    generateCase(PARAMS, dir);
    const files = emittedConfigFiles(dir);
    assert.ok(
      files.length >= 2,
      `expected to find at least rspack.config.mjs and vite.config.mjs, found [${files}]`
    );
    for (const file of files) {
      const src = readFileSync(path.join(dir, file), 'utf8');
      assert.doesNotMatch(
        src,
        /Math\.random|Date\.now|Date\(|crypto|hrtime/,
        `${file}: config source must not embed a nondeterministic value at generation/import time`
      );
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('emitted vite.config.mjs source contains no manualChunks or advancedChunks configuration', () => {
  // Structural guard. The only pre-existing guard against a hand-written
  // manual chunking config was a single exact property path in
  // test/build.test.mjs: `cfg.build.rollupOptions?.output?.manualChunks`.
  // Rollup/Vite equally accept `output` as an ARRAY of output configs
  // (`output: [ { manualChunks(id) {...} } ]`), and `.manualChunks` on an
  // array is `undefined` regardless of what the array's entries contain --
  // so that check passes on an array-form config even though manual chunking
  // is very much active (confirmed directly this session: with an array-form
  // manualChunks in the emitted config, all pre-existing build.test.mjs
  // assertions stayed green). Scanning the raw emitted SOURCE TEXT for the
  // token itself catches every syntactic form (array or object, any nesting),
  // and also covers `advancedChunks`, Rolldown's own named-group chunking
  // option -- a second way to force the same forbidden outcome that no
  // existing assertion looked for at all.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    generateCase(PARAMS, dir);
    const src = readFileSync(path.join(dir, 'vite.config.mjs'), 'utf8');
    assert.doesNotMatch(
      src, /manualChunks/,
      'vite.config.mjs must not hand-write manualChunks in any form -- that would force agreement by configuration instead of measuring it'
    );
    assert.doesNotMatch(
      src, /advancedChunks/,
      "vite.config.mjs must not hand-write advancedChunks -- Rolldown's named-group equivalent of manualChunks"
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('emitted vite.config.mjs registers no plugins unless a dial is requested', async () => {
  // Structural + behavioural guard. The only pre-existing guard against a
  // transform plugin was `assert.ok(!cfg.plugins || cfg.plugins.length === 0)`
  // in test/build.test.mjs, which only inspects the TOP-level `plugins` array
  // on the loaded config object. A real per-module transform plugin registered
  // at `build.rollupOptions.plugins` (a legal Rollup config location, distinct
  // from Vite's top-level `plugins`) is invisible to that check while firing
  // on every module Rollup processes (confirmed directly: a `transform` hook
  // placed there fired on 404 modules for a 400-source-module case while every
  // pre-existing build.test.mjs assertion stayed green).
  //
  // The benchmark ships two OPTIONAL dials that register plugins -- a
  // per-module loader (BENCH_LOADER) and a per-asset plugin (BENCH_PLUGIN) --
  // so "no plugins ever" is not the invariant. The invariant is that the
  // DEFAULT build carries neither, because either one is a confound between
  // the two tools. All four combinations are checked so that enabling one dial
  // cannot silently enable the other.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  const prevLoader = process.env.BENCH_LOADER;
  const prevPlugin = process.env.BENCH_PLUGIN;
  const load = async () =>
    (await import(pathToFileURL(path.join(dir, 'vite.config.mjs')).href + '?d=' + Date.now() + Math.random())).default;
  try {
    delete process.env.BENCH_LOADER;
    delete process.env.BENCH_PLUGIN;
    generateCase(PARAMS, dir);
    const src = readFileSync(path.join(dir, 'vite.config.mjs'), 'utf8');

    // Exactly one `plugins:` registration in the source, and it must be gated.
    const occurrences = src.match(/plugins:/g) ?? [];
    assert.equal(occurrences.length, 1, 'expected exactly one plugins registration in the emitted config');
    assert.match(
      src,
      /\.\.\.\(allPlugins\.length \? \{ plugins: allPlugins \} : \{\}\)/,
      'the sole plugins registration must be gated on a dial being requested'
    );

    const off = await load();
    assert.ok(!off.plugins || off.plugins.length === 0, 'default config must register no top-level plugins');
    assert.ok(
      !off.build?.rollupOptions?.plugins || off.build.rollupOptions.plugins.length === 0,
      'default config must register no nested rollupOptions plugins either'
    );

    // A check that cannot fail is not a check: prove each gate opens, and that
    // opening one does not open the other.
    process.env.BENCH_LOADER = 'noop';
    const loaderOnly = await load();
    assert.deepEqual(loaderOnly.plugins.map((p) => p.name), ['synthetic-transform']);

    delete process.env.BENCH_LOADER;
    process.env.BENCH_PLUGIN = 'asset-scan';
    const pluginOnly = await load();
    assert.deepEqual(pluginOnly.plugins.map((p) => p.name), ['synthetic-asset']);

    process.env.BENCH_LOADER = 'noop';
    const both = await load();
    assert.deepEqual(both.plugins.map((p) => p.name), ['synthetic-transform', 'synthetic-asset']);
  } finally {
    if (prevLoader === undefined) delete process.env.BENCH_LOADER;
    else process.env.BENCH_LOADER = prevLoader;
    if (prevPlugin === undefined) delete process.env.BENCH_PLUGIN;
    else process.env.BENCH_PLUGIN = prevPlugin;
    rmSync(dir, { recursive: true, force: true });
  }
});

test('rspack.config.mjs does not ship an unverified numeric collapse-factor claim for minSize', () => {
  // Regression guard for a fabricated measurement: the generator's emitted
  // comment once claimed minSize 0->2000 "collapsed the chunk count by
  // roughly 5x", a number that does not reproduce. Re-measured directly
  // (minSize 0 vs 2000, same case, chunk count before/after) across four
  // shapes: ~1.54x, ~1.77x, ~1.79x, and ~1.00x (no visible effect) --
  // nowhere near a consistent 5x, and shape-dependent enough that no single
  // multiplier is trustworthy. The requirement itself (minSize must stay 0)
  // is real; only the invented multiplier was not. This guards against
  // reintroducing ANY unverified "roughly Nx" style claim, not just the
  // specific old one.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    generateCase(PARAMS, dir);
    const src = readFileSync(path.join(dir, 'rspack.config.mjs'), 'utf8');
    assert.doesNotMatch(
      src,
      /roughly\s+\d+(\.\d+)?x/i,
      'comment must not assert an unverified numeric collapse factor'
    );
    assert.match(src, /minSize/, 'comment must still explain why minSize: 0 is required');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('is deterministic: same params produce byte-identical trees', () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-gen-a-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-gen-b-'));
  try {
    generateCase(PARAMS, a);
    generateCase(PARAMS, b);
    assert.equal(hashTree(a), hashTree(b));
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('generating the same params in two SEPARATE PROCESSES emits byte-identical config sources', () => {
  // The regex scan above (and the same-process byte-identical-trees test)
  // both have a shared blind spot: a nondeterministic value INTERPOLATED
  // into a config template's definition inside generate-case.mjs itself --
  // e.g. `` `// generated at ${Date.now()}` `` written into the VITE_CONFIG
  // template literal -- is evaluated exactly once, when generate-case.mjs's
  // module top level first runs. Within a single process every generateCase()
  // call reuses that one frozen string, so two dirs generated in the SAME
  // test (same process) hash identical regardless -- the same-process test
  // above cannot catch it. And by the time it reaches disk the interpolation
  // has already evaluated to a plain number (e.g. `// generated at
  // 1787403519949`), so the literal text "Date.now" never appears in the
  // emitted file either -- the regex scan above cannot catch it (confirmed
  // directly this session: with that exact corruption injected, both of
  // those tests stayed green). Only two genuinely separate OS processes,
  // each importing generate-case.mjs fresh, expose it: confirmed directly
  // this session that two independent `node -e` processes generating
  // identical params emitted two different frozen timestamps.
  const dirA = mkdtempSync(path.join(process.cwd(), '.tmp-gen-proc-a-'));
  const dirB = mkdtempSync(path.join(process.cwd(), '.tmp-gen-proc-b-'));
  try {
    const generatorUrl = pathToFileURL(path.resolve('scripts/generate-case.mjs')).href;
    const childScript = (dir) =>
      `import(${JSON.stringify(generatorUrl)}).then(({ generateCase }) => generateCase(${JSON.stringify(PARAMS)}, ${JSON.stringify(dir)}));`;
    execFileSync(process.execPath, ['-e', childScript(dirA)], { encoding: 'utf8' });
    execFileSync(process.execPath, ['-e', childScript(dirB)], { encoding: 'utf8' });
    assert.equal(
      hashTree(dirA), hashTree(dirB),
      'generating identical params in two separate node processes must emit byte-identical config sources -- a per-process-frozen value (e.g. Date.now baked in at module load) would differ here'
    );
  } finally {
    rmSync(dirA, { recursive: true, force: true });
    rmSync(dirB, { recursive: true, force: true });
  }
});
