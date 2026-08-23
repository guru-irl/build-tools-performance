import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readdirSync, statSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { generateCase, computeCaseShape, fillerCountForBytes } from '../scripts/generate-case.mjs';
import { parsePluginSpec, stageFor, PLUGIN_CATEGORIES } from '../scripts/plugin-core.mjs';
import { rspack } from '@rspack/core';

// Tests for the two dials that model per-module SIZE and per-ASSET work.
//
// The module-size dial is only meaningful if its filler reaches the EMITTED
// output. Padding that tree-shaking drops, or that the minifier folds away,
// would inflate source bytes on disk while leaving the build unchanged -- the
// dial would appear to work while modelling nothing. So the load-bearing
// assertion here measures dist bytes from disk, not source bytes.

const SHAPE = { targetModules: 800, targetChunks: 80, routes: 16, modulesPerVendor: 4 };

function walk(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    let entries;
    try {
      entries = readdirSync(d, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) stack.push(p);
      else out.push(p);
    }
  }
  return out;
}

const bytes = (files) => files.reduce((n, f) => n + statSync(f).size, 0);

function runRspack(config) {
  return new Promise((resolve, reject) => {
    rspack(config, (err, stats) => {
      if (err) return reject(err);
      if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true })));
      resolve(stats.toJson({ all: false, chunks: true, assets: true }));
    });
  });
}

async function buildCase(params, dir, env = {}) {
  const prev = {};
  for (const [k, v] of Object.entries(env)) {
    prev[k] = process.env[k];
    if (v === undefined) delete process.env[k];
    else process.env[k] = v;
  }
  try {
    const shape = generateCase(params, dir);
    const cfg = (await import(path.resolve(dir, 'rspack.config.mjs') + '?v=' + Date.now() + Math.random())).default;
    const json = await runRspack({ ...cfg, context: path.resolve(dir) });
    return {
      shape,
      cfg,
      json,
      srcBytes: bytes(walk(path.join(dir, 'src'))),
      distBytes: bytes(walk(path.join(dir, 'dist'))),
    };
  } finally {
    for (const [k, v] of Object.entries(prev)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  }
}

test('moduleBytes defaults to 0 and leaves generated sources untouched', () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    generateCase(SHAPE, a);
    generateCase({ ...SHAPE, moduleBytes: 0 }, b);
    const fileA = readFileSync(path.join(a, 'src/vendors/v0/i0.js'), 'utf8');
    const fileB = readFileSync(path.join(b, 'src/vendors/v0/i0.js'), 'utf8');
    assert.equal(fileA, fileB, 'moduleBytes:0 must be identical to omitting it');
    assert.doesNotMatch(fileA, /_h0\(/, 'default bodies must contain no filler helpers');
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('fillerCountForBytes scales with the requested target', () => {
  assert.equal(fillerCountForBytes(0), 0);
  assert.equal(fillerCountForBytes(300, 400), 0, 'targets below the base body cost nothing');
  const small = fillerCountForBytes(2000, 400);
  const large = fillerCountForBytes(8000, 400);
  assert.ok(small > 0, 'a target above the base must produce filler');
  assert.ok(large > small * 3, `expected roughly linear growth, got ${small} -> ${large}`);
});

test('moduleBytes filler is reachable AND reaches emitted bytes', async () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    const base = await buildCase(SHAPE, a);
    const big = await buildCase({ ...SHAPE, moduleBytes: 6000 }, b);

    assert.ok(big.srcBytes > base.srcBytes * 3, `source should grow: ${base.srcBytes} -> ${big.srcBytes}`);
    assert.ok(
      big.distBytes > base.distBytes * 3,
      `emitted output must grow with moduleBytes: ${base.distBytes} -> ${big.distBytes}`
    );

    // REACHABILITY, asserted structurally rather than inferred from size.
    //
    // A dist-size check alone does NOT prove the filler is live. Measured
    // directly: making the filler unreachable (defined but never called) still
    // grew dist from 198KB to 1943KB, versus 2570KB when reachable -- because
    // rspack does not drop unreferenced module-local function declarations.
    // So a size-only assertion passes on dead filler, and the dial would be
    // modelling retained garbage instead of live code. The call site is
    // therefore checked in the generated source itself.
    const src = readFileSync(path.join(b, 'src/vendors/v0/i0.js'), 'utf8');
    assert.match(src, /_h0\(/, 'filler helpers must be generated');
    assert.match(
      src,
      /_all\(parts\.length\)/,
      'filler must be CALLED from the exported function, not merely defined alongside it'
    );
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('moduleBytes does not disturb the module or chunk dials', async () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    const base = await buildCase(SHAPE, a);
    const big = await buildCase({ ...SHAPE, moduleBytes: 6000 }, b);
    // Assert predicted VALUES, not merely that the two agree.
    assert.equal(base.json.chunks.length, base.shape.totalChunks);
    assert.equal(big.json.chunks.length, big.shape.totalChunks);
    assert.equal(big.shape.totalModules, base.shape.totalModules, 'size must not change module count');
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('plugin categories map to the processAssets stage they model', () => {
  assert.equal(stageFor('asset-transform'), 400, 'transform work belongs where minifiers run');
  assert.equal(stageFor('asset-rewrite'), 1000);
  assert.equal(stageFor('asset-summarize'), 5000);
  assert.deepEqual(parsePluginSpec('asset-rewrite:3'), { kind: 'asset-rewrite', arg: 3 });
  assert.throws(() => parsePluginSpec('asset-scan:xyz'), /invalid plugin spec/);
});

test('with no BENCH_PLUGIN the generated config registers no plugins', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    const { cfg } = await buildCase(SHAPE, dir, { BENCH_PLUGIN: undefined });
    assert.ok(!cfg.plugins || cfg.plugins.length === 0, 'default must register no asset plugin');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('an unknown plugin category FAILS the build, proving the plugin really runs', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    await assert.rejects(
      () => buildCase(SHAPE, dir, { BENCH_PLUGIN: 'not-a-real-category' }),
      /unknown plugin category/,
      'an unregistered plugin would let an unknown category pass silently'
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('asset-rewrite actually modifies emitted assets', async () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    const off = await buildCase(SHAPE, a, { BENCH_PLUGIN: undefined });
    const on = await buildCase(SHAPE, b, { BENCH_PLUGIN: 'asset-rewrite' });
    assert.equal(on.json.chunks.length, on.shape.totalChunks, 'rewriting must not change the chunk dial');
    // The rewrite appends a marker to every asset it touches, so emitted bytes
    // must move. Comparing counts alone would pass even if the plugin no-opped.
    assert.ok(
      on.distBytes > off.distBytes,
      `asset-rewrite must change emitted output: ${off.distBytes} -> ${on.distBytes}`
    );
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('every advertised plugin category is registered and builds', async () => {
  for (const kind of PLUGIN_CATEGORIES) {
    const dir = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
    try {
      const { cfg, json, shape } = await buildCase(SHAPE, dir, { BENCH_PLUGIN: kind });
      assert.equal(cfg.plugins?.length, 1, `${kind} must register exactly one plugin`);
      assert.equal(json.chunks.length, shape.totalChunks, `${kind} must not disturb the chunk dial`);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
});

test('BENCH_CACHE_GROUPS adds exactly N cacheGroups and defaults to none', async () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    const off = await buildCase(SHAPE, a, { BENCH_CACHE_GROUPS: undefined });
    const baseCount = Object.keys(off.cfg.optimization.splitChunks.cacheGroups).length;
    const on = await buildCase(SHAPE, b, { BENCH_CACHE_GROUPS: '25' });
    const onCount = Object.keys(on.cfg.optimization.splitChunks.cacheGroups).length;
    assert.equal(onCount, baseCount + 25, `expected ${baseCount} + 25 cacheGroups, got ${onCount}`);
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('cacheGroup dial isolates evaluation cost: it must never form a chunk', async () => {
  // The dial exists to measure the cost of ASKING, so its groups must match
  // nothing. If one ever matched, it would form chunks and the dial would be
  // changing the graph it is supposed to hold fixed -- confounding every
  // measurement taken with it.
  for (const kind of ['regex', 'function']) {
    const dir = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
    try {
      const { json, shape } = await buildCase(SHAPE, dir, {
        BENCH_CACHE_GROUPS: '30',
        BENCH_CACHE_GROUP_TESTS: kind,
      });
      // Assert the predicted VALUE, not merely that two runs agree.
      assert.equal(
        json.chunks.length,
        shape.totalChunks,
        `${kind}: chunk count ${json.chunks.length} != predicted ${shape.totalChunks}`
      );
      const synthetic = json.chunks.filter((c) => (c.names ?? []).some((n) => String(n).includes('synthetic')));
      assert.equal(synthetic.length, 0, `${kind}: synthetic cacheGroups must not form chunks`);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
});

test('cacheGroup tests are distinct per group, so none can share one compiled pattern', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-dial-'));
  try {
    const { cfg } = await buildCase(SHAPE, dir, { BENCH_CACHE_GROUPS: '10' });
    const groups = cfg.optimization.splitChunks.cacheGroups;
    const sources = Object.keys(groups)
      .filter((k) => k.startsWith('synthetic'))
      .map((k) => String(groups[k].test));
    assert.equal(sources.length, 10);
    assert.equal(new Set(sources).size, 10, 'each generated group must have a distinct test');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
