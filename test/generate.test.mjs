import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
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

test('emitted rspack.config.mjs source contains no nondeterministic time/random APIs', () => {
  // A static string is only actually deterministic if it stays a static
  // string. Injecting e.g. output.filename: `[id].${Date.now()}.js` would
  // leave every existing test green (chunk counts, module counts, and file
  // structure are all unaffected) while making the BUILD nondeterministic
  // across runs. This is a cheap, build-free first line of defense; see the
  // real double-build comparison in test/build.test.mjs for the dynamic
  // check.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-gen-'));
  try {
    generateCase(PARAMS, dir);
    const src = readFileSync(path.join(dir, 'rspack.config.mjs'), 'utf8');
    assert.doesNotMatch(
      src,
      /Math\.random|Date\.now|Date\(|crypto|hrtime/,
      'config source must not embed a nondeterministic value at generation/import time'
    );
  } finally {
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
