import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { generateCase } from '../scripts/generate-case.mjs';
import { rspack } from '@rspack/core';

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

