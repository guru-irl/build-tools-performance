import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { generateCase } from '../scripts/generate-case.mjs';
import { rspack } from '@rspack/core';
import { build as viteBuild } from 'vite';

// These tests invoke a REAL rspack build (Node API) on a generated case and
// read real stats. Tests that only inspect generateCase's own output (file
// counts, import graphs) cannot detect a broken splitChunks config: they
// never run a bundler, so a cache group that silently collapses the chunk
// dial would stay invisible to them. Only a real build, read back through
// stats.toJson({ chunks: true }), can catch that.
//
// Two shapes with different targetChunks (and therefore different predicted
// totals) are checked so a hard-coded constant cannot satisfy both.
const SHAPE_A = { targetModules: 400, targetChunks: 80, routes: 20, modulesPerVendor: 4 };
const SHAPE_B = { targetModules: 400, targetChunks: 60, routes: 12, modulesPerVendor: 4 };

async function loadConfig(dir) {
  const mod = await import(path.join(dir, 'rspack.config.mjs'));
  return mod.default;
}

function runRspack(config) {
  return new Promise((resolve, reject) => {
    rspack(config, (err, stats) => {
      if (err) return reject(err);
      if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true })));
      resolve(stats.toJson({ chunks: true, modules: true, assets: true }));
    });
  });
}

async function buildCase(params, dir) {
  const shape = generateCase(params, dir);
  const cfg = await loadConfig(dir);
  const json = await runRspack({ ...cfg, context: dir });
  return { shape, cfg, json };
}

test('rspack real build emits exactly cliques + routes + 1 chunks (targetChunks=80)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { shape, cfg, json } = await buildCase(SHAPE_A, dir);
    assert.equal(
      json.chunks.length, shape.totalChunks,
      `predicted ${shape.totalChunks} chunks (cliques ${shape.cliques} + routes ${shape.routes} + 1), observed ${json.chunks.length}`
    );
    assert.equal(cfg.optimization.minimize, true, 'minification must be enabled');

    // Lock the mechanism itself, not just its outcome: the cache group that
    // makes chunk count a dial must have no fixed `name` (a name collapses
    // distinct vendor cliques into a shared handful of chunks -- see the
    // "fixed name" test below and the report for a measured example), and
    // both splitChunks levels must keep minSize at 0 (a nonzero minSize
    // merges small chunks and also breaks the dial). The built-in cache
    // groups must be off so they cannot absorb vendor modules themselves.
    const { cacheGroups } = cfg.optimization.splitChunks;
    assert.equal(cacheGroups.default, false);
    assert.equal(cacheGroups.defaultVendors, false);
    const vendorGroup = Object.values(cacheGroups).find((g) => g && typeof g === 'object' && g.test);
    assert.ok(vendorGroup, 'expected a cache group with a `test` matcher for vendor packages');
    assert.equal(vendorGroup.name, undefined, 'the vendor cache group must NOT have a fixed name');
    assert.equal(cfg.optimization.splitChunks.minSize, 0);
    assert.equal(vendorGroup.minSize, 0);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('rspack real build emits exactly cliques + routes + 1 chunks (targetChunks=60, a different shape)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { shape, cfg, json } = await buildCase(SHAPE_B, dir);
    assert.notEqual(
      shape.totalChunks, 80,
      "fixture sanity: this shape's predicted count must differ from the other test's, or a hard-coded constant could pass both"
    );
    assert.equal(
      json.chunks.length, shape.totalChunks,
      `predicted ${shape.totalChunks} chunks (cliques ${shape.cliques} + routes ${shape.routes} + 1), observed ${json.chunks.length}`
    );
    assert.equal(cfg.optimization.minimize, true, 'minification must be enabled');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('minification measurably shrinks emitted output vs an unminified twin build', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    generateCase(SHAPE_B, dir);
    const cfg = await loadConfig(dir);
    const minified = await runRspack({ ...cfg, context: dir });
    const unminified = await runRspack({
      ...cfg,
      context: dir,
      output: { ...cfg.output, path: path.join(dir, 'dist-unmin') },
      optimization: { ...cfg.optimization, minimize: false },
    });
    const totalBytes = (json) => json.assets.reduce((n, a) => n + a.size, 0);
    const minSize = totalBytes(minified);
    const rawSize = totalBytes(unminified);
    assert.ok(
      minSize < rawSize * 0.5,
      `expected minified output (${minSize}B) to be well under half of unminified output (${rawSize}B)`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// Total bytes actually written under a case's dist/ directory, walked from
// disk (not from stats.toJson({assets:true})). This matters: rspack's own
// asset stats do not report emitted .map files as assets at all, so a
// stats-based total would silently miss a devtool:'source-map' regression --
// measured directly on SHAPE_B below: stats-reported bytes rose only ~2%,
// while the real on-disk total (.js + .map) rose ~517%.
function distBytes(dir) {
  const distDir = path.join(dir, 'dist');
  return readdirSync(distDir, { recursive: true })
    .map((p) => path.join(distDir, p))
    .filter((p) => statSync(p).isFile())
    .reduce((n, p) => n + statSync(p).size, 0);
}

// Measured on SHAPE_B (400/60/12/4) in this repo: shipped config (mode:
// 'production') produced 107,577B on disk; mode: 'development' (with
// optimization.minimize left explicitly true) produced 427,260B, ~4x over.
// 200,000B sits comfortably above normal baseline variance and comfortably
// below that ~4x inflation.
const PRODUCTION_MODE_BYTE_CEILING = 200_000;

test('building the same case twice, from independent generations, emits identical asset names', async () => {
  // Generation determinism (byte-identical source trees) is already covered
  // in test/generate.test.mjs, but the config is a static STRING -- nothing
  // upstream of this checked that BUILDING it twice is deterministic. Two
  // separate temp dirs (not two imports of the same file) so Node's ES module
  // cache can't paper over a `${Date.now()}`-style corruption by only
  // evaluating the template literal once.
  const dirA = mkdtempSync(path.join(process.cwd(), '.tmp-build-a-'));
  const dirB = mkdtempSync(path.join(process.cwd(), '.tmp-build-b-'));
  try {
    const a = await buildCase(SHAPE_B, dirA);
    // Guarantee a nonzero time gap so a Date.now()-in-the-config corruption
    // can't accidentally land in the same millisecond on a very fast machine.
    await new Promise((resolve) => setTimeout(resolve, 5));
    const b = await buildCase(SHAPE_B, dirB);
    const namesA = a.json.assets.map((x) => x.name).sort();
    const namesB = b.json.assets.map((x) => x.name).sort();
    assert.deepEqual(
      namesB, namesA,
      'asset names must be identical across independent builds of the same case'
    );
  } finally {
    rmSync(dirA, { recursive: true, force: true });
    rmSync(dirB, { recursive: true, force: true });
  }
});

test("shipped config sets mode: 'production', and dist output stays under an absolute byte ceiling", async () => {
  // A ratio between two builds (see the minification test above) cannot
  // catch `mode` being flipped to 'development': BOTH sides of that ratio
  // inherit the same corrupted mode, so minSize < rawSize * 0.5 still holds
  // even though the whole build is ~4x too big. Only an assertion on the
  // config's own absolute field, plus an absolute (non-relative) ceiling on
  // the shipped build's real output, can catch that.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { cfg } = await buildCase(SHAPE_B, dir);
    assert.equal(cfg.mode, 'production', "shipped rspack.config.mjs must set mode: 'production'");

    const bytes = distBytes(dir);
    assert.ok(
      bytes <= PRODUCTION_MODE_BYTE_CEILING,
      `dist output for shape 400/60/12/4 is ${bytes}B, expected <= ${PRODUCTION_MODE_BYTE_CEILING}B`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// The module axis was previously locked only by an on-disk file count
// (test/generate.test.mjs), which proves generateCase wrote the right number
// of files but nothing about what the bundler actually consumed. This reads
// the real module graph back from a real build. The Set is required:
// ConcatenatedModule wrapper entries in stats.toJson({modules:true}) share
// their root module's nameForCondition (that's how rspack represents
// `./src/routes/r0.jsx + 17 modules` internally), so a raw filtered length
// (or a dedupe keyed on the `name` field instead of `nameForCondition`)
// overcounts by exactly the number of concatenation wrappers created --
// measured directly on the three shapes below: 479 vs 400, 459 vs 400, and
// 102 vs 100 without the Set.
function sourceModuleCount(dir, json) {
  const srcRoot = path.join(dir, 'src') + path.sep;
  return new Set(
    json.modules
      .filter((m) => (m.nameForCondition || '').startsWith(srcRoot))
      .map((m) => m.nameForCondition)
  ).size;
}

test('rspack real build consumes exactly totalModules distinct source modules (targetChunks=80 shape)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { shape, json } = await buildCase(SHAPE_A, dir);
    assert.equal(
      sourceModuleCount(dir, json), shape.totalModules,
      'bundler must consume exactly the modules generateCase predicted, deduped by nameForCondition'
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('rspack real build consumes exactly totalModules distinct source modules (targetChunks=60, a different shape)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { shape, json } = await buildCase(SHAPE_B, dir);
    assert.equal(sourceModuleCount(dir, json), shape.totalModules);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('rspack real build consumes exactly totalModules distinct source modules (routes=1, modulesPerVendor=20 edge case)', async () => {
  // routes=1 forces cliques down to 1 (see computeCaseShape), and k=20 is
  // called out separately because a larger modulesPerVendor changes how many
  // leaf vendor files exist per clique -- both are edge shapes worth
  // checking independently of SHAPE_A/SHAPE_B's routes=12/20, k=4.
  const EDGE_SHAPE = { targetModules: 100, targetChunks: 3, routes: 1, modulesPerVendor: 20 };
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { shape, json } = await buildCase(EDGE_SHAPE, dir);
    assert.equal(sourceModuleCount(dir, json), shape.totalModules);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// Measured on SHAPE_B in this repo: shipped-config baseline is 107,577B.
// A family of output-shape regressions leaves chunk/module counts (and so
// every other test in this suite) untouched while inflating real dist
// bytes: concatenateModules:false measured +16.4% (125,243B), chunkIds and
// moduleIds:'named' measured +11.5% (119,988B), usedExports:false plus
// sideEffects:false measured +66.5% (179,062B), and devtool:'source-map'
// measured +517.3% on disk (664,058B -- note stats.toJson({assets:true})
// alone reports only the .js total and would show just +1.8%, silently
// missing the emitted .map files entirely). 150,000B is generous relative to
// the ~108KB baseline (39% headroom) but sits well under the smallest
// regression this bound must catch (179,062B) and far under the largest
// (664,058B).
const DIST_SIZE_SANITY_CEILING = 150_000;

test('known shape (400/60/12/4) stays within a coarse absolute dist-size sanity bound', async () => {
  // None of concatenateModules:false, chunkIds/moduleIds:'named',
  // usedExports:false+sideEffects:false, devtool:'source-map', or
  // output.clean:false change chunk count or module count, so every other
  // test in this suite is blind to them. If per-chunk byte cost is what this
  // benchmark measures, an unbounded output shape defeats the point. This
  // bound is coarse on purpose (it is not meant to catch the smaller +11-16%
  // regressions) but it also reinforces FIX 1: mode:'development' alone
  // measured 427,260B here, comfortably over this ceiling too.
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    await buildCase(SHAPE_B, dir);
    const bytes = distBytes(dir);
    assert.ok(
      bytes <= DIST_SIZE_SANITY_CEILING,
      `dist output for shape 400/60/12/4 is ${bytes}B, expected <= ${DIST_SIZE_SANITY_CEILING}B`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------
// Vite: same generated case, no manualChunks, no transform plugin (see
// VITE_CONFIG's comment in generate-case.mjs for the full rationale). These
// tests invoke a REAL Vite build (Node API, `build()` from 'vite', which
// bundles with Rolldown in the installed 8.2.1) on the emitted
// vite.config.mjs, exactly as `vite build` would load it standalone -- not
// just an inspection of generateCase's own output.
// ---------------------------------------------------------------------------

async function loadViteConfig(dir) {
  const mod = await import(path.join(dir, 'vite.config.mjs'));
  return mod.default; // defineConfig() is an identity function at runtime
}

async function buildVite(dir) {
  const res = await viteBuild({ configFile: path.join(dir, 'vite.config.mjs'), logLevel: 'error' });
  const out = Array.isArray(res) ? res[0].output : res.output;
  return out.filter((o) => o.type === 'chunk').length;
}

// Real files written under dist-vite/, walked from disk (mirrors distBytes()
// above, which does the same for rspack's dist/). A file-COUNT check alone
// (written.length === viteChunks) cannot tell a real build from an empty
// one: the entryBody tree-shaking collapse this task's investigation found
// (see VITE_CHUNK_TOLERANCE's comment below) emits exactly 1 file for a
// reported 1 chunk -- satisfying a count check trivially -- and that file is
// 0 bytes (confirmed directly this session: reproducing that exact collapse
// on both SHAPE_A and SHAPE_B measured `written.length: 1, bytes: 0` for
// both). A byte floor closes that gap.
function writtenViteFiles(dir) {
  return readdirSync(path.join(dir, 'dist-vite'), { recursive: true })
    .map((p) => path.join(dir, 'dist-vite', p))
    .filter((p) => statSync(p).isFile());
}

// Measured directly this session, real builds, same two shapes used
// throughout this file, stable across 3 repeats each (byte-identical every
// time): SHAPE_A dist-vite totals 87,366B, SHAPE_B totals 87,451B. 50,000B
// sits with real headroom below both (about 43% and 42% below, respectively)
// while being far above the 0B the degenerate tree-shaking collapse above
// produces -- the failure this floor exists to catch.
const VITE_DIST_BYTE_FLOOR = 50_000;

// Measured directly this session, real builds, minify on, same generateCase
// output rspack builds elsewhere in this file (see buildCase()'s asserted
// totals above):
//   SHAPE_A (cliques 59, routes 20, rspack 80 chunks): vite 70  -> 87.50%
//   SHAPE_B (cliques 47, routes 12, rspack 60 chunks): vite 52  -> 86.67%
// Both committed shapes are comfortably inside the tolerance below, but they
// are NOT close to the real floor -- an earlier version of this comment
// claimed "real headroom below the lowest of the two asserted-shape
// measurements (86.67%)" (~6.7-8 points). That does not hold once more of
// the parameter space is sampled.
//
// This generator's own vendor-clique allocation always gives ~20% of
// cliques a subset of exactly one route (SIZE_MIX above, `size: 1, weight:
// 0.2`). A vendor reachable from exactly one route shares that route's
// reachability signature, so Rollup/Rolldown (reachability-based) merges it
// into the route's own chunk, while rspack's `minChunks: 1` cache group
// (test-based, not reachability-based) hoists it out as a separate chunk
// regardless. Confirmed exactly, this session, across 9 additional shapes
// spanning routes 12-1000 and cliques 47-5000 (modulesPerVendor both 4 and
// 8): counting the real length-1 subsets assignCliques(cliques, routes)
// returns for each shape (call it size1cliques),
//   vite = rspack - size1cliques + 1
// held exactly -- max |real vite chunks - this prediction| across all 9 was
// 0. That mechanism makes the ratio lowest when routes == 0.2 * cliques
// (fewer routes than that and size1cliques is capped at `routes`, so
// proportionally less merges away; more routes than that and size1cliques
// stays ~0.2*cliques while the total grows, so it is a shrinking share), and
// at that crossover the ratio tends toward cliques / (1.2*cliques) = 5/6 =
// 83.33% as cliques grows, approached from above but never below it.
// Measured directly this session, at the crossover, three scales: cliques
// 500 routes 100 -> 83.53% (both modulesPerVendor 4 and 8 -- confirming the
// ratio does not depend on modulesPerVendor), cliques 2000 routes 400 ->
// 83.38%, cliques 5000 routes 1000 -> 83.35%, the lowest ratio measured this
// session and the closest to that 83.33% asymptote. Two shapes deliberately
// far from the crossover, also measured this session, land well above it
// instead (cliques 1000 routes 50, i.e. far fewer routes than the crossover
// needs -> 95.34%; cliques 100 routes 300, i.e. far more routes than it
// needs -> 95.26%), consistent with the crossover being the real floor and
// not an arbitrary worst case. A tiny edge case (targetModules 100,
// targetChunks 3, routes 1, modulesPerVendor 20) also measured this session:
// vite 2 / rspack 3 -> 66.67% -- at that scale a single merged chunk is a
// third of the total, so it is deliberately NOT one of the shapes this
// tolerance is asserted against below (this generator's real cases target
// hundreds to thousands of chunks, see the case grid in
// docs/design/synthetic-chunk-scaling.md, not single digits). A ten-thousand
// module case (targetModules 10000, targetChunks 1000, routes 100,
// modulesPerVendor 4) also measured this session: vite 901 / rspack 1000 ->
// 90.10%, well clear of the crossover for that shape's routes:cliques ratio.
//
// 0.78 sits with real headroom (~5.3 percentage points) below the lowest
// ratio measured this session (83.35%), which itself sits within ~0.02
// points of the mechanism's own asymptotic floor (5/6 = 83.33...%) -- i.e.
// this tolerance is not expected to need lowering further for any shape
// this generator can actually produce, for the structural reason above, not
// just because no counterexample happened to be sampled. It remains nowhere
// close to loose enough to pass a genuinely broken build: the entryBody
// tree-shaking collapse this task's own investigation found and fixed
// produced a ratio of 1/80 = 1.25%.
const VITE_CHUNK_TOLERANCE = 0.78;

test('vite real build reaches a comparable chunk count with no manual chunk config (targetChunks=80 shape)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const shape = generateCase(SHAPE_A, dir);

    // Lock the mechanism, not just one shape's outcome: no manualChunks (a
    // manualChunks function that forced rspack's exact number would destroy
    // the reachability-based finding this comparison exists to measure),
    // minification genuinely on, output genuinely written to disk, and zero
    // transform plugins configured.
    const cfg = await loadViteConfig(dir);
    assert.equal(cfg.build.minify, true, 'minification must be enabled');
    assert.equal(cfg.build.write, true, 'vite must write real output to disk, like rspack does');
    assert.equal(
      cfg.build.rollupOptions?.output?.manualChunks, undefined,
      'must not hand-write manualChunks -- that would force agreement by configuration instead of measuring it'
    );
    assert.ok(!cfg.plugins || cfg.plugins.length === 0, 'no transform plugin should be configured');

    const viteChunks = await buildVite(dir);
    const lo = shape.totalChunks * VITE_CHUNK_TOLERANCE;
    assert.ok(
      viteChunks >= lo,
      `vite produced ${viteChunks} chunks for a case whose rspack/predicted total is ${shape.totalChunks}; expected >= ${lo} (${VITE_CHUNK_TOLERANCE * 100}% tolerance)`
    );
    // Guards against the exact failure mode this task's own investigation
    // found: an inert entry (defines routes but never runs) gets entirely
    // tree-shaken away by Rollup/Rolldown's default preserveEntrySignatures:
    // false for app builds, collapsing the count to 1. routes is a cheap,
    // shape-independent floor no real (non-degenerate) build should be at or
    // under: cliques + routes + 1 is always > routes.
    assert.ok(
      viteChunks > shape.routes,
      `vite chunk count ${viteChunks} looks degenerate (<= route count ${shape.routes})`
    );

    // CRITICAL requirement: Vite must actually write to disk, not just return
    // an in-memory bundle (write: false would silently exclude emission from
    // any later timing/size comparison and bias it against rspack). Checked
    // at both shapes (see the targetChunks=60 test below), not just this one,
    // and backed by a real byte floor, not just a file count -- see
    // writtenViteFiles()/VITE_DIST_BYTE_FLOOR above for why the count alone
    // is not enough.
    const written = writtenViteFiles(dir);
    assert.equal(written.length, viteChunks, 'every reported chunk must be a real file on disk');
    const bytes = written.reduce((n, p) => n + statSync(p).size, 0);
    assert.ok(
      bytes >= VITE_DIST_BYTE_FLOOR,
      `dist-vite output for shape 400/80/20/4 is ${bytes}B, expected >= ${VITE_DIST_BYTE_FLOOR}B`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('vite real build reaches a comparable chunk count with no manual chunk config (targetChunks=60, a different shape)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const shape = generateCase(SHAPE_B, dir);
    assert.notEqual(shape.totalChunks, 80, 'fixture sanity: this shape must differ from the other test\'s shape');
    const viteChunks = await buildVite(dir);
    const lo = shape.totalChunks * VITE_CHUNK_TOLERANCE;
    assert.ok(
      viteChunks >= lo,
      `vite produced ${viteChunks} chunks for a case whose rspack/predicted total is ${shape.totalChunks}; expected >= ${lo} (${VITE_CHUNK_TOLERANCE * 100}% tolerance)`
    );
    assert.ok(
      viteChunks > shape.routes,
      `vite chunk count ${viteChunks} looks degenerate (<= route count ${shape.routes})`
    );

    // Extended to this second shape too (see FIX 8 in the review this task
    // closes): the disk-emit check previously ran at SHAPE_A only.
    const written = writtenViteFiles(dir);
    assert.equal(written.length, viteChunks, 'every reported chunk must be a real file on disk');
    const bytes = written.reduce((n, p) => n + statSync(p).size, 0);
    assert.ok(
      bytes >= VITE_DIST_BYTE_FLOOR,
      `dist-vite output for shape 400/60/12/4 is ${bytes}B, expected >= ${VITE_DIST_BYTE_FLOOR}B`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------
// Cross-tool: build the SAME generated case with BOTH bundlers, in the same
// test, and compare their real chunk counts directly to each other (not each
// independently to the formula, which the two tests above already do).
// ---------------------------------------------------------------------------

// Measured directly this session (same builds cited above): relative
// difference |vite - rspack| / rspack was 12.5% (SHAPE_A: |70-80|/80) and
// 13.3% (SHAPE_B: |52-60|/60). These are the same underlying ratio
// VITE_CHUNK_TOLERANCE bounds, viewed as a complement (relDiff == 1 - ratio
// at the shapes where both are asserted, since rspack's real chunk count
// always equals shape.totalChunks -- see the identity tests above); see that
// constant's comment for the measured floor and mechanism across a wider set
// of shapes (10 measured this session): the same complementary ratio rose to
// 16.65% there, so real headroom here is ~3.3 percentage points, not a wide
// margin, though it still holds at every shape measured. 0.2 (20%) is
// nowhere close to loose enough to pass a genuinely broken comparison:
// reproduced directly this session, giving the vendor cache group a fixed
// `name` (the historical splitChunks-name regression this repo already
// guards against elsewhere) breaks rspack's own chunk count (SHAPE_A 80 ->
// 22, SHAPE_B 60 -> 14) while leaving vite's real count (70 / 52) unmoved --
// a purely rspack-side config corruption cannot move a vite build -- and
// that mismatch is exactly what this test's own formula, |vite - rspack| /
// rspack, blows up to: 218.2% for SHAPE_A and 271.4% for SHAPE_B, over 10x
// this tolerance's ceiling. (A prior version of this comment stated 76.7%
// here, which is |14 - 60| / 60 -- the ORIGINAL shape's rspack count vs the
// CORRUPTED one, a different quantity from this test's own formula above,
// and not one this test computes.)
const CROSS_TOOL_RELATIVE_TOLERANCE = 0.2;

test('cross-tool: rspack and vite chunk counts land within tolerance of each other on the same generated case (targetChunks=80 shape)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { shape, json } = await buildCase(SHAPE_A, dir);
    const rspackChunks = json.chunks.length;
    const viteChunks = await buildVite(dir);
    const rel = Math.abs(viteChunks - rspackChunks) / rspackChunks;
    assert.ok(
      rel <= CROSS_TOOL_RELATIVE_TOLERANCE,
      `rspack=${rspackChunks} vite=${viteChunks} (predicted ${shape.totalChunks}): relative difference ${(rel * 100).toFixed(1)}% exceeds ${CROSS_TOOL_RELATIVE_TOLERANCE * 100}% tolerance`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('cross-tool: rspack and vite chunk counts land within tolerance of each other on the same generated case (targetChunks=60, a different shape)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const { shape, json } = await buildCase(SHAPE_B, dir);
    const rspackChunks = json.chunks.length;
    const viteChunks = await buildVite(dir);
    const rel = Math.abs(viteChunks - rspackChunks) / rspackChunks;
    assert.ok(
      rel <= CROSS_TOOL_RELATIVE_TOLERANCE,
      `rspack=${rspackChunks} vite=${viteChunks} (predicted ${shape.totalChunks}): relative difference ${(rel * 100).toFixed(1)}% exceeds ${CROSS_TOOL_RELATIVE_TOLERANCE * 100}% tolerance`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------
// Invariance controls: the scientific controls for the whole benchmark, not
// incidental regression tests. Each proves one claim this generator makes
// about its own mechanism, on a REAL build -- not on generateCase's own
// output -- because generator-only assertions have previously stayed green
// while real chunk counts collapsed (see the fixed-`name` regression cited
// above: 80->22 and 60->14) or an entry got tree-shaken to a single empty
// chunk. If either control below were false, the case grid in
// docs/design/synthetic-chunk-scaling.md would not actually decouple the two
// axes it claims to.
// ---------------------------------------------------------------------------

// Mechanism helpers for the collision control below. A chunk-count delta
// alone cannot distinguish "collision vendors merged into clique 0's own
// vendor chunk" (the claimed mechanism) from an unrelated way to reach the
// same numbers -- e.g. collision vendors absorbed into a ROUTE chunk instead
// (reproduced directly this session: emitting them from src/shared/ instead
// of src/vendors/, so the cache group's `test` regex never matches them,
// gives the identical 60 chunks / 440 modules / delta-of-10). These read
// real chunk MEMBERSHIP and real on-disk bytes, not just counts.
function chunkIdsForVendor(dir, json, vendorIdx) {
  const prefix = path.join(dir, `src/vendors/v${vendorIdx}`) + path.sep;
  const ids = new Set();
  for (const m of json.modules) {
    if ((m.nameForCondition || '').startsWith(prefix)) {
      for (const cid of (m.chunks || [])) ids.add(cid);
    }
  }
  return ids;
}

// Distinct vendor PACKAGE indices (the `v${N}` directory, not individual
// files) whose modules land in chunk `chunkId` -- i.e. how many separate
// vendor packages that chunk actually holds.
function vendorPackagesInChunk(dir, json, chunkId) {
  const re = /vendors[\\/]v(\d+)[\\/]/;
  const found = new Set();
  for (const m of json.modules) {
    if (!(m.chunks || []).includes(chunkId)) continue;
    const rel = (m.nameForCondition || '').slice(dir.length);
    const match = rel.match(re);
    if (match) found.add(Number(match[1]));
  }
  return found;
}

// Real bytes on disk for a chunk's emitted file(s) -- mirrors distBytes()
// above: stats-reported chunk `size` is a pre-minification estimate (measured
// directly this session: a single-vendor chunk reports stats size 1,448B but
// is 761B on disk after minification), so only real emitted bytes reflect
// what this benchmark actually measures.
function chunkRealBytes(dir, json, chunkId) {
  const chunk = json.chunks.find((c) => c.id === chunkId);
  return chunk.files.reduce((n, f) => n + statSync(path.join(dir, 'dist', f)).size, 0);
}

test('collision control (rspack): N vendors sharing one route subset produce exactly N fewer real rspack chunks than N vendors with distinct subsets, at equal module count', async () => {
  // Two twin cases: same routes, same modulesPerVendor, same total vendor-
  // package count (cliques + collisions), same module budget. The ONLY
  // difference is whether the extra `collisions` vendor packages get their
  // OWN distinct route subset (the "distinct" twin -- an ordinary case, just
  // asked for that many cliques directly) or all reuse an EXISTING clique's
  // subset via computeCaseShape's collisionVendors (the "collide" case --
  // see generateCase, which wires collision vendors onto subsets[0] rather
  // than allocating one of their own). A nameless splitChunks cache group
  // groups by identical consumer-set, so if the mechanism is real, colliding
  // must cost exactly `collisions` fewer chunks than being distinct -- not
  // "roughly fewer", a specific, checkable number.
  //
  // This exact "-N chunks" delta is RSPACK-SPECIFIC (a property of its
  // nameless splitChunks cache group), not a bundler-independent law -- an
  // earlier version of this comment stated the delta as if it were general.
  // Measured directly this session, real builds, the SAME twins (cliques=47,
  // routes=12, 440 modules, collisions=10) under Vite: rspack goes 70->60
  // (delta 10, matching `collisions` exactly, the assertion below), Vite
  // goes 60->52 (delta 8, NOT 10) -- consistent with this file's own
  // established `vite = rspack - size1cliques + 1` relation (see
  // VITE_CHUNK_TOLERANCE's comment above), since the two twins have
  // different size-1-clique counts.
  //
  // The BUNDLER-INDEPENDENT invariant is qualitative, not this exact number:
  // collisionVendors adds vendor modules without adding chunks in EITHER
  // bundler, just via different mechanisms (rspack's explicit nameless
  // cache group vs Rolldown's reachability-based grouping merging same-
  // signature vendors on its own). Measured directly this session, real Vite
  // builds, at fixed cliques=47/routes=12/440 modules: collisionVendors =
  // 0, 10, and 25 all produced exactly 52 Vite chunks.
  //
  // Checked at TWO collision counts (10 and 20), not one: test/shape.test.mjs
  // never exercised collisionVendors at all before this fix, and this was the
  // ONLY real-build collision test, fixed at exactly collisions=10 -- a break
  // confined to larger counts (e.g. the reviewer's own "don't wire imports
  // when collisionVendors > 100") is invisible to a single parameter point.
  // See the fix report for a count-dependent corruption this loop is
  // specifically designed to catch (RED at collisions=20, GREEN at =10).
  const routes = 12, k = 4, cliques = 47, targetModules = 440;
  for (const collisions of [10, 20]) {
    const distinctParams = {
      targetModules, targetChunks: cliques + collisions + routes + 1, routes, modulesPerVendor: k,
    };
    const collideParams = {
      targetModules, targetChunks: cliques + routes + 1, routes, modulesPerVendor: k, collisionVendors: collisions,
    };

    // Both temp dirs are created INSIDE the try (not one before it): if the
    // SECOND mkdtempSync throws, dirD must still be cleaned up in `finally`,
    // not leaked. Declared with `let` and guarded in `finally` below so a
    // throw before either assignment (or between them) never passes an
    // undefined path to rmSync.
    let dirD, dirC;
    try {
      dirD = mkdtempSync(path.join(process.cwd(), `.tmp-coll-d-${collisions}-`));
      dirC = mkdtempSync(path.join(process.cwd(), `.tmp-coll-c-${collisions}-`));
      const shapeD = generateCase(distinctParams, dirD);
      const shapeC = generateCase(collideParams, dirC);

      // Accounting invariant, checked before any build: collision vendors must
      // be counted as real vendor modules, identically to giving them distinct
      // cliques of their own -- not silently dropped. Measured this session
      // against a computeCaseShape that ignored collisionVendors entirely:
      // shapeC.vendorModules was 188 (= cliques*k) instead of 228
      // (= (cliques+collisions)*k, matching the distinct twin) -- and the two
      // twins' REAL chunk counts already differed by exactly `collisions` even
      // then (an ordinary 47-clique case next to an ordinary 57-clique case),
      // so a chunk-count comparison ALONE cannot tell "collisions really merge"
      // apart from "collisionVendors is a no-op"; this accounting check is what
      // actually distinguishes them.
      assert.equal(
        shapeC.vendorModules, shapeD.vendorModules,
        `collision vendors must be counted as real vendor modules: distinct twin has ${shapeD.vendorModules}, collide case has ${shapeC.vendorModules}`
      );
      assert.equal(shapeC.totalModules, shapeD.totalModules, 'fixture sanity: both twins must share the same module budget');
      assert.notEqual(
        shapeD.totalChunks, shapeC.totalChunks,
        'fixture sanity: the two twins must predict different chunk counts, or this control proves nothing'
      );

      const jsonD = await runRspack({ ...(await loadConfig(dirD)), context: dirD });
      const jsonC = await runRspack({ ...(await loadConfig(dirC)), context: dirC });

      assert.equal(
        jsonD.chunks.length, shapeD.totalChunks,
        `distinct twin: predicted ${shapeD.totalChunks} chunks, observed ${jsonD.chunks.length}`
      );
      assert.equal(
        jsonC.chunks.length, shapeC.totalChunks,
        `collide case: predicted ${shapeC.totalChunks} chunks, observed ${jsonC.chunks.length}`
      );
      assert.equal(
        jsonD.chunks.length - jsonC.chunks.length, collisions,
        `colliding ${collisions} vendors onto one existing subset must cost exactly ${collisions} fewer real chunks than giving them distinct subsets: distinct=${jsonD.chunks.length}, collide=${jsonC.chunks.length}`
      );

      // The collision vendors' own modules must actually be present and
      // reachable in the real build, not silently orphaned: an unimported file
      // is simply excluded from the module graph by the bundler (not merged
      // into a chunk), which would ALSO leave chunk count unchanged, for the
      // wrong reason.
      assert.equal(
        sourceModuleCount(dirC, jsonC), shapeC.totalModules,
        'collision vendor modules must be reachable in the real build, not silently orphaned'
      );

      // Assert the MECHANISM, not just the count: clique 0's own vendor (v0)
      // must land in exactly one chunk in both twins, and in the collide case
      // that chunk must actually CONTAIN all `collisions` collision vendors
      // alongside v0 -- not merely produce a matching delta some other way.
      const idsD0 = chunkIdsForVendor(dirD, jsonD, 0);
      const idsC0 = chunkIdsForVendor(dirC, jsonC, 0);
      assert.equal(idsD0.size, 1, `distinct twin: vendor v0 must land in exactly one chunk, found ${idsD0.size}`);
      assert.equal(idsC0.size, 1, `collide case: vendor v0 must land in exactly one chunk, found ${idsC0.size}`);
      const chunkD0 = [...idsD0][0];
      const chunkC0 = [...idsC0][0];

      const vendorPkgsD0 = vendorPackagesInChunk(dirD, jsonD, chunkD0);
      const vendorPkgsC0 = vendorPackagesInChunk(dirC, jsonC, chunkC0);
      assert.equal(
        vendorPkgsD0.size, 1,
        `distinct twin: v0's chunk must contain exactly 1 vendor package (itself), found ${vendorPkgsD0.size}: [${[...vendorPkgsD0]}]`
      );
      assert.equal(
        vendorPkgsC0.size, 1 + collisions,
        `collide case: v0's chunk must contain v0 plus all ${collisions} collision vendors (${1 + collisions} packages total, not merged into a route chunk instead), found ${vendorPkgsC0.size}: [${[...vendorPkgsC0]}]`
      );

      // Real-bytes cross-check: the collide twin's v0 chunk holds `1 +
      // collisions` vendor packages' worth of (minified) content, so it must
      // be substantially bigger than the distinct twin's v0 chunk, which
      // holds only itself. Measured this session under the correct
      // mechanism: distinct v0 chunk is 761B at both loop counts (it never
      // contains any collision vendor); collide v0 chunk is 7,720B at
      // collisions=10 (~10.14x) and 14,680B at collisions=20 (~19.29x). 5x is
      // a generous margin below the SMALLER of those two measured ratios,
      // and far above the ~1x a broken mechanism (collision vendors absorbed
      // elsewhere, leaving v0's own chunk untouched) would produce.
      const bytesD0 = chunkRealBytes(dirD, jsonD, chunkD0);
      const bytesC0 = chunkRealBytes(dirC, jsonC, chunkC0);
      assert.ok(
        bytesC0 > bytesD0 * 5,
        `collide case's v0 chunk (${bytesC0}B, ${vendorPkgsC0.size} vendor packages) must be substantially larger than the distinct twin's v0 chunk (${bytesD0}B, ${vendorPkgsD0.size} vendor package) -- ratio ${(bytesC0 / bytesD0).toFixed(2)}x`
      );
    } finally {
      // Guarded: if the second mkdtempSync (dirC) throws, dirD is truthy and
      // dirC is still undefined -- cleaning up only what was actually created.
      if (dirD) rmSync(dirD, { recursive: true, force: true });
      if (dirC) rmSync(dirC, { recursive: true, force: true });
    }
  }
});

// ---------------------------------------------------------------------------
// Module-axis orthogonality controls: chunk count and module count must be
// independently dialable in BOTH directions, on real build output, at more
// than two points each -- a hard-coded constant returning the right answer
// for a single shape cannot pass three differing ones.
// ---------------------------------------------------------------------------

test('module axis is orthogonal to the chunk axis: real chunk count does not move as source modules grow (cliques/routes fixed, modulesPerVendor varies)', async () => {
  // cliques and routes fixed at SHAPE_B's own values (47, 12), so this is the
  // same chunk shape (60) as SHAPE_B above; only modulesPerVendor (k) varies,
  // and targetModules is chosen so that vendorModules (cliques*k, the only
  // term that scales with k) is exactly cancelled back out by a correspondingly
  // smaller appModules, leaving a fixed 199 app-only modules at every k --
  // i.e. growth in modules comes entirely from the vendor side, same as any
  // real case in the grid. The k=4 point (targetModules 400) reproduces
  // SHAPE_B exactly, a useful cross-check against the identity test for that
  // shape above.
  const cliques = 47, routes = 12, targetChunks = cliques + routes + 1; // 60, SHAPE_B's own shape
  const results = [];
  for (const k of [2, 4, 8]) {
    const dir = mkdtempSync(path.join(process.cwd(), `.tmp-orth1-${k}-`));
    try {
      const targetModules = cliques * k + 199 + routes + 1;
      const shape = generateCase({ targetModules, targetChunks, routes, modulesPerVendor: k }, dir);
      assert.equal(shape.totalChunks, targetChunks, 'fixture sanity: predicted chunk count must not depend on k');
      const json = await runRspack({ ...(await loadConfig(dir)), context: dir });
      // Per-row CORRECTNESS check, not just cross-row INVARIANCE: the
      // chunkCounts.size === 1 assertion below only proves every row agrees
      // with every other row -- it stays green even if every row is
      // uniformly wrong (measured directly this session: a fixed `name` on
      // the vendor cache group produces 14/14/14 real chunks for k=2/4/8
      // instead of 60/60/60, and chunkCounts.size is still 1; folding vendor
      // 1 onto clique 0's subset at every k produces 59/59/59 instead of
      // 60/60/60, same false pass). targetChunks is this test's own fixed
      // input (60 at every k), so comparing the REAL build's chunk count
      // against it directly is what test 16's per-row `r.modules ===
      // r.predicted` check already does for the module axis -- this is the
      // equivalent check for the chunk axis, and this test was the
      // asymmetric one without it.
      assert.equal(
        json.chunks.length, targetChunks,
        `k=${k}: real chunk count ${json.chunks.length} != targetChunks ${targetChunks}`
      );
      results.push({ k, targetModules, chunks: json.chunks.length, modules: sourceModuleCount(dir, json) });
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
  const chunkCounts = new Set(results.map((r) => r.chunks));
  assert.equal(
    chunkCounts.size, 1,
    `real chunk count must not move as modulesPerVendor varies: ${JSON.stringify(results)}`
  );
  assert.ok(
    results[2].modules > results[0].modules * 1.5,
    `real source-module count must actually grow substantially across k=2..8, or this control proves nothing: ${JSON.stringify(results)}`
  );
});

test('chunk axis is orthogonal to the module axis: real source-module count does not move as chunks vary (routes/modulesPerVendor/targetModules fixed)', async () => {
  // routes, modulesPerVendor and targetModules fixed; only targetChunks
  // varies, so only the vendor/app split inside the (constant) module budget
  // moves -- computeCaseShape's own appModules formula is what keeps
  // totalModules pinned at exactly targetModules regardless of targetChunks
  // (see shape.test.mjs), but nothing upstream of this test had ever asked a
  // REAL bundler whether the modules it actually consumes track that
  // arithmetic as the chunk dial turns, at more than one point. The
  // targetChunks=60 point reproduces SHAPE_B exactly (same 400/60/12/4 shape
  // used throughout this file).
  const routes = 12, k = 4, targetModules = 400;
  const results = [];
  for (const targetChunks of [40, 60, 100]) {
    const dir = mkdtempSync(path.join(process.cwd(), `.tmp-orth2-${targetChunks}-`));
    try {
      const shape = generateCase({ targetModules, targetChunks, routes, modulesPerVendor: k }, dir);
      assert.equal(shape.totalModules, targetModules, 'fixture sanity: predicted module count must not depend on targetChunks');
      const json = await runRspack({ ...(await loadConfig(dir)), context: dir });
      results.push({
        targetChunks, chunks: json.chunks.length, modules: sourceModuleCount(dir, json), predicted: shape.totalModules,
      });
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
  const chunkCounts = new Set(results.map((r) => r.chunks));
  assert.ok(
    chunkCounts.size > 1,
    `fixture sanity: real chunk count must actually move as targetChunks varies, or this control proves nothing: ${JSON.stringify(results)}`
  );
  const moduleCounts = new Set(results.map((r) => r.modules));
  assert.equal(
    moduleCounts.size, 1,
    `real source-module count must not move as targetChunks varies: ${JSON.stringify(results)}`
  );
  for (const r of results) {
    assert.equal(
      r.modules, r.predicted,
      `targetChunks=${r.targetChunks}: real source modules ${r.modules} != predicted ${r.predicted}`
    );
  }
});
