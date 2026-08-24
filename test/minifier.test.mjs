import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, readdirSync, statSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { generateCase } from '../scripts/generate-case.mjs';
import { minifierFromEnv, MINIFIERS, OPTIMIZE_SIZE } from '../scripts/minifier-select.mjs';

const SHAPE = { targetModules: 900, targetChunks: 60, routes: 12, modulesPerVendor: 4, moduleBytes: 1200 };

async function buildWith(env, dir) {
  const saved = {};
  for (const k of ['BENCH_MINIFIER', 'BENCH_MINIFY']) {
    saved[k] = process.env[k];
    delete process.env[k];
  }
  Object.assign(process.env, env);
  try {
    generateCase(SHAPE, dir);
    const { rspack } = await import('@rspack/core');
    const cfg = (await import(pathToFileURL(path.resolve(dir, 'rspack.config.mjs')).href + '?v=' + Math.random())).default;
    await new Promise((res, rej) => {
      rspack({ ...cfg, context: path.resolve(dir) }, (err, stats) => {
        if (err) return rej(err);
        if (stats.hasErrors()) return rej(new Error(stats.toJson({ all: false, errors: true }).errors[0]?.message));
        res();
      });
    });
    let js = 0;
    let sample = '';
    for (const f of readdirSync(path.join(dir, 'dist'))) {
      if (!f.endsWith('.js')) continue;
      const p = path.join(dir, 'dist', f);
      js += statSync(p).size;
      if (!sample) sample = readFileSync(p, 'utf8');
    }
    return { js, sample, cfg };
  } finally {
    for (const k of Object.keys(saved)) {
      if (saved[k] === undefined) delete process.env[k];
      else process.env[k] = saved[k];
    }
  }
}

const tmp = () => mkdtempSync(path.join(process.cwd(), '.tmp-min-'));

test('minifierFromEnv defaults to null so an unset variable keeps published behaviour', () => {
  assert.equal(minifierFromEnv({}), null);
  assert.equal(minifierFromEnv({ BENCH_MINIFIER: '' }), null);
});

test('minifierFromEnv accepts every advertised minifier and rejects anything else', () => {
  for (const m of MINIFIERS) assert.equal(minifierFromEnv({ BENCH_MINIFIER: m }), m);
  assert.equal(minifierFromEnv({ BENCH_MINIFIER: 'OXC' }), 'oxc', 'case-insensitive');
  assert.throws(() => minifierFromEnv({ BENCH_MINIFIER: 'terser' }), /unknown minifier/);
});

test('the oxc minifier runs at the same processAssets stage a built-in one uses', () => {
  // If it ran at a different stage it would be measured against different
  // neighbours and the comparison with the built-in would not be like-for-like.
  assert.equal(OPTIMIZE_SIZE, 400);
});

test('an unset BENCH_MINIFIER produces byte-identical output to an explicit swc', async () => {
  const a = tmp();
  const b = tmp();
  try {
    const def = await buildWith({}, a);
    const swc = await buildWith({ BENCH_MINIFIER: 'swc' }, b);
    assert.equal(def.js, swc.js, 'the default must BE the built-in, not merely resemble it');
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});

test('BOTH minifiers actually minify — proved against unminified output', async () => {
  // The load-bearing test. A minifier that silently passed assets through
  // would look like the fastest option in every measurement.
  const off = tmp();
  const swc = tmp();
  const oxc = tmp();
  try {
    const bare = await buildWith({ BENCH_MINIFY: '0' }, off);
    const s = await buildWith({ BENCH_MINIFIER: 'swc' }, swc);
    const o = await buildWith({ BENCH_MINIFIER: 'oxc' }, oxc);
    assert.ok(s.js < bare.js * 0.8, `swc must shrink output: ${bare.js} -> ${s.js}`);
    assert.ok(o.js < bare.js * 0.8, `oxc must shrink output: ${bare.js} -> ${o.js}`);
    assert.ok(!/\n\s\s\s/.test(o.sample.slice(0, 4000)), 'oxc output must not retain source indentation');
  } finally {
    for (const d of [off, swc, oxc]) rmSync(d, { recursive: true, force: true });
  }
});

test('selecting oxc disables the built-in so assets are not minified twice', async () => {
  const d = tmp();
  try {
    const { cfg } = await buildWith({ BENCH_MINIFIER: 'oxc' }, d);
    assert.equal(cfg.optimization.minimize, false, 'built-in minimizer must be off when oxc is selected');
    const names = (cfg.plugins ?? []).map((p) => p.constructor?.name);
    assert.ok(names.includes('OxcMinifyPlugin'), `expected OxcMinifyPlugin, got ${names.join(',') || 'none'}`);
  } finally {
    rmSync(d, { recursive: true, force: true });
  }
});

test('selecting swc leaves the built-in on and registers no minifier plugin', async () => {
  const d = tmp();
  try {
    const { cfg } = await buildWith({ BENCH_MINIFIER: 'swc' }, d);
    assert.equal(cfg.optimization.minimize, true);
    const names = (cfg.plugins ?? []).map((p) => p.constructor?.name);
    assert.ok(!names.includes('OxcMinifyPlugin'), 'swc path must not also register the oxc plugin');
  } finally {
    rmSync(d, { recursive: true, force: true });
  }
});
