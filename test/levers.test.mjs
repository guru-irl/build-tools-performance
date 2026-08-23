import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { generateCase } from '../scripts/generate-case.mjs';
import { rspack } from '@rspack/core';
import { build as viteBuild } from 'vite';

// Tests for the BENCH_SOURCEMAP / BENCH_MINIFY build-time levers.
//
// Every assertion here reads REAL build output from DISK, never from
// stats.toJson({assets:true}). That is not stylistic: rspack does not report
// emitted .map files as assets at all, so a stats-based check cannot see a
// source map appear or disappear. A lever test built on stats would pass
// whether or not the lever worked.
//
// The generated configs read process.env at module-evaluation time, so each
// case is generated into its own fresh temp directory: a unique config path
// means a fresh module evaluation that observes the env set for that test.

const SHAPE = { targetModules: 400, targetChunks: 60, routes: 12, modulesPerVendor: 4 };

/** Runs `fn` with the given env vars set, restoring the previous values after. */
async function withEnv(vars, fn) {
  const prev = {};
  for (const [k, v] of Object.entries(vars)) {
    prev[k] = process.env[k];
    if (v === undefined) delete process.env[k];
    else process.env[k] = v;
  }
  try {
    return await fn();
  } finally {
    for (const [k, v] of Object.entries(prev)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  }
}

/** Recursively lists every file under `dir` (returns [] when absent). */
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
      resolve(stats.toJson({ all: false, chunks: true }));
    });
  });
}

/** Generates a case under `env`, builds it with rspack, returns disk facts. */
async function buildWithEnv(env, dir) {
  return withEnv(env, async () => {
    const shape = generateCase(SHAPE, dir);
    const cfg = (await import(path.join(dir, 'rspack.config.mjs'))).default;
    const json = await runRspack({ ...cfg, context: dir });
    const files = walk(path.join(dir, 'dist'));
    return {
      shape,
      cfg,
      chunks: json.chunks.length,
      maps: files.filter((f) => f.endsWith('.map')),
      totalBytes: bytes(files),
    };
  });
}

test('default config (no lever env set) emits zero source maps', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  try {
    const r = await buildWithEnv({ BENCH_SOURCEMAP: undefined, BENCH_MINIFY: undefined }, dir);
    assert.equal(r.cfg.devtool, false, 'shipped default must not enable devtool');
    assert.equal(r.maps.length, 0, `expected no .map files by default, found ${r.maps.length}`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('default config keeps minification ON (the mandatory benchmark setting)', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  try {
    const r = await buildWithEnv({ BENCH_SOURCEMAP: undefined, BENCH_MINIFY: undefined }, dir);
    assert.equal(r.cfg.optimization.minimize, true, 'shipped default must minify');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('BENCH_SOURCEMAP=1 emits exactly one .map per emitted chunk', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  try {
    const r = await buildWithEnv({ BENCH_SOURCEMAP: '1', BENCH_MINIFY: undefined }, dir);
    // Exact, not merely non-zero: a lever that emitted a single map, or one
    // for only the entry chunk, would satisfy a `> 0` assertion while
    // completely misrepresenting what source maps cost at scale.
    assert.equal(
      r.maps.length,
      r.chunks,
      `expected one .map per chunk (${r.chunks}), found ${r.maps.length}`
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('BENCH_SOURCEMAP=1 measurably increases on-disk output', async () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  try {
    const off = await buildWithEnv({ BENCH_SOURCEMAP: undefined, BENCH_MINIFY: undefined }, a);
    const on = await buildWithEnv({ BENCH_SOURCEMAP: '1', BENCH_MINIFY: undefined }, b);
    assert.ok(
      on.totalBytes > off.totalBytes * 1.5,
      `expected maps-on output (${on.totalBytes}B) to exceed 1.5x maps-off (${off.totalBytes}B)`
    );
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('BENCH_MINIFY=0 measurably increases on-disk output', async () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  try {
    const on = await buildWithEnv({ BENCH_SOURCEMAP: undefined, BENCH_MINIFY: undefined }, a);
    const off = await buildWithEnv({ BENCH_SOURCEMAP: undefined, BENCH_MINIFY: '0' }, b);
    assert.equal(off.cfg.optimization.minimize, false, 'BENCH_MINIFY=0 must disable minimize');
    assert.ok(
      off.totalBytes > on.totalBytes * 1.2,
      `expected unminified output (${off.totalBytes}B) to exceed 1.2x minified (${on.totalBytes}B)`
    );
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('levers do not disturb the chunk dial the benchmark measures', async () => {
  // The levers exist to vary cost, never shape. If enabling source maps or
  // disabling minification changed the emitted chunk count, every lever
  // comparison would be confounded by a different graph.
  const dirs = [];
  try {
    const counts = [];
    for (const env of [
      { BENCH_SOURCEMAP: undefined, BENCH_MINIFY: undefined },
      { BENCH_SOURCEMAP: '1', BENCH_MINIFY: undefined },
      { BENCH_SOURCEMAP: undefined, BENCH_MINIFY: '0' },
      { BENCH_SOURCEMAP: '1', BENCH_MINIFY: '0' },
    ]) {
      const d = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
      dirs.push(d);
      const r = await buildWithEnv(env, d);
      counts.push({ env, chunks: r.chunks, expected: r.shape.totalChunks });
    }
    // Assert the VALUE, not just agreement: four identically-wrong counts
    // would satisfy a "all equal" check while the dial was broken.
    for (const c of counts) {
      assert.equal(
        c.chunks,
        c.expected,
        `chunk count ${c.chunks} != predicted ${c.expected} under ${JSON.stringify(c.env)}`
      );
    }
    assert.equal(new Set(counts.map((c) => c.chunks)).size, 1, 'levers must not change chunk count');
  } finally {
    for (const d of dirs) rmSync(d, { recursive: true, force: true });
  }
});

test('Vite honours both levers: maps off by default, emitted when asked', async () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-lever-'));
  try {
    const buildVite = async (env, dir) =>
      withEnv(env, async () => {
        generateCase(SHAPE, dir);
        const cfg = (await import(path.join(dir, 'vite.config.mjs'))).default;
        await viteBuild({ ...cfg, root: dir, logLevel: 'error' });
        return walk(path.join(dir, 'dist-vite'));
      });
    const off = await buildVite({ BENCH_SOURCEMAP: undefined, BENCH_MINIFY: undefined }, a);
    const on = await buildVite({ BENCH_SOURCEMAP: '1', BENCH_MINIFY: undefined }, b);
    assert.equal(off.filter((f) => f.endsWith('.map')).length, 0, 'Vite must emit no maps by default');
    assert.ok(
      on.filter((f) => f.endsWith('.map')).length > 0,
      'BENCH_SOURCEMAP=1 must make Vite emit source maps'
    );
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});
