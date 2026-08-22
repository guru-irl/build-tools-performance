import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
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
