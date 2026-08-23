import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { generateCase } from '../scripts/generate-case.mjs';
import { rspack } from '@rspack/core';
import { parseSpec, specFromEnv, applyWork, CATEGORIES } from '../scripts/loader-core.mjs';

// Tests for the synthetic loader taxonomy.
//
// The hard part of testing a loader is proving it RAN. Most categories return
// source that is semantically unchanged, and minification erases any marker
// comment, so "the build succeeded" proves nothing. Two independent proofs are
// used instead:
//
//   1. An unknown category must FAIL the build. If the loader were not wired
//      into the config at all, an unknown category would be silently ignored
//      and the build would succeed.
//   2. The `emit` category produces a countable number of extra assets, so its
//      effect is directly observable in build output, including how many times
//      `passes` applied it.

const SHAPE = { targetModules: 400, targetChunks: 60, routes: 12, modulesPerVendor: 4 };

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

function runRspack(config) {
  return new Promise((resolve, reject) => {
    rspack(config, (err, stats) => {
      if (err) return reject(err);
      if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true })));
      resolve(stats.toJson({ all: false, chunks: true, assets: true }));
    });
  });
}

async function buildWith(env, dir) {
  return withEnv({ BENCH_LOADER: undefined, BENCH_LOADER_PASSES: undefined, ...env }, async () => {
    const shape = generateCase(SHAPE, dir);
    const cfg = (await import(path.join(dir, 'rspack.config.mjs'))).default;
    const json = await runRspack({ ...cfg, context: dir });
    return { shape, cfg, json };
  });
}

test('parseSpec reads a category and its numeric argument', () => {
  assert.deepEqual(parseSpec('noop'), { kind: 'noop', arg: null });
  assert.deepEqual(parseSpec('cpu:2500'), { kind: 'cpu', arg: 2500 });
  assert.throws(() => parseSpec('cpu:abc'), /invalid loader spec/);
  assert.equal(parseSpec(''), null);
});

test('specFromEnv defaults passes to 1 and rejects nonsense', () => {
  assert.equal(specFromEnv({}), null);
  assert.equal(specFromEnv({ BENCH_LOADER: 'noop' }).passes, 1);
  assert.equal(specFromEnv({ BENCH_LOADER: 'noop', BENCH_LOADER_PASSES: '3' }).passes, 3);
  assert.equal(specFromEnv({ BENCH_LOADER: 'noop', BENCH_LOADER_PASSES: 'x' }).passes, 1);
});

test('with no BENCH_LOADER the generated config has NO loader rule at all', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-loader-'));
  try {
    const { cfg } = await buildWith({}, dir);
    // Not merely "a rule that does nothing": a no-op JS loader still costs a
    // boundary crossing per module, which is one of the measured categories,
    // so the default build must contain no rule whatsoever.
    assert.equal(cfg.module, undefined, 'default config must not declare module.rules');
    const src = readFileSync(path.join(dir, 'rspack.config.mjs'), 'utf8');
    assert.match(src, /loaderSpec/, 'config should still contain the guarded branch');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('with BENCH_LOADER set the config declares exactly one loader rule', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-loader-'));
  try {
    const { cfg } = await buildWith({ BENCH_LOADER: 'noop' }, dir);
    assert.equal(cfg.module.rules.length, 1);
    assert.match(cfg.module.rules[0].use[0].loader, /synthetic-loader\.mjs$/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('an unknown category FAILS the build, proving the loader really executes', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-loader-'));
  try {
    await assert.rejects(
      () => buildWith({ BENCH_LOADER: 'not-a-real-category' }, dir),
      /unknown loader category/,
      'an unwired loader would let an unknown category pass silently'
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('emit category emits extra assets, and passes multiplies them', async () => {
  const one = mkdtempSync(path.join(process.cwd(), '.tmp-loader-'));
  const two = mkdtempSync(path.join(process.cwd(), '.tmp-loader-'));
  try {
    const a = await buildWith({ BENCH_LOADER: 'emit:1' }, one);
    const b = await buildWith({ BENCH_LOADER: 'emit:1', BENCH_LOADER_PASSES: '2' }, two);
    const synthetic = (json) => json.assets.filter((x) => x.name.startsWith('synthetic/')).length;
    const n1 = synthetic(a.json);
    const n2 = synthetic(b.json);
    assert.ok(n1 > 0, 'emit:1 must produce synthetic assets');
    // Two passes of emit:1 emit two files per module, but they are named by
    // pass index, so the distinct asset count doubles.
    assert.equal(n2, n1 * 2, `expected passes=2 to double emitted assets (${n1} -> ${n2})`);
  } finally {
    rmSync(one, { recursive: true, force: true });
    rmSync(two, { recursive: true, force: true });
  }
});

test('loader categories do not disturb the chunk dial', async () => {
  const dirs = [];
  try {
    for (const category of ['noop', 'cpu:100', 'regex', 'transform-native']) {
      const d = mkdtempSync(path.join(process.cwd(), '.tmp-loader-'));
      dirs.push(d);
      const { shape, json } = await buildWith({ BENCH_LOADER: category }, d);
      // Assert the predicted VALUE, not just that the counts agree: four
      // identically-wrong counts would satisfy an agreement-only check.
      assert.equal(
        json.chunks.length,
        shape.totalChunks,
        `${category}: chunks ${json.chunks.length} != predicted ${shape.totalChunks}`
      );
    }
  } finally {
    for (const d of dirs) rmSync(d, { recursive: true, force: true });
  }
});

test('every advertised category is implemented and transforms source', async () => {
  // Guards against the category list and the implementation drifting apart.
  const src = 'export const a = 1 + 2;\nfunction f(){ return a; }\nexport default f;\n';
  for (const kind of CATEGORIES) {
    if (kind === 'emit') continue; // needs a host, covered by the build test above
    const spec = { kind, arg: kind === 'cpu' ? 100 : kind === 'async' ? 1 : null, passes: 1 };
    const out = await applyWork(src, spec, {});
    assert.equal(typeof out, 'string', `${kind} must return a string`);
    assert.ok(out.length > 0, `${kind} must return non-empty source`);
  }
});
