import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeCaseShape } from '../scripts/generate-case.mjs';

test('satisfies both formulas exactly for m10k-c1k', () => {
  const s = computeCaseShape({ targetModules: 10000, targetChunks: 1000, routes: 100, modulesPerVendor: 4 });
  assert.equal(s.cliques, 899);
  assert.equal(s.vendorModules, 3596);
  assert.equal(s.appModules, 6303);
  assert.equal(s.totalChunks, 1000);
  assert.equal(s.totalModules, 10000);
});

test('satisfies both formulas exactly for m50k-c1k', () => {
  const s = computeCaseShape({ targetModules: 50000, targetChunks: 1000, routes: 300, modulesPerVendor: 4 });
  assert.equal(s.cliques, 699);
  assert.equal(s.vendorModules, 2796);
  assert.equal(s.appModules, 46903);
  assert.equal(s.totalChunks, 1000);
  assert.equal(s.totalModules, 50000);
});

test('rejects a shape with more routes than chunks to hold them', () => {
  assert.throws(
    () => computeCaseShape({ targetModules: 10000, targetChunks: 1000, routes: 1001, modulesPerVendor: 4 }),
    RangeError
  );
});

test('rejects a shape needing more cliques than routes can encode', () => {
  assert.throws(
    () => computeCaseShape({ targetModules: 10000, targetChunks: 1000, routes: 5, modulesPerVendor: 4 }),
    RangeError
  );
});

test('rejects a shape whose vendor modules exceed the module budget', () => {
  assert.throws(
    () => computeCaseShape({ targetModules: 1000, targetChunks: 900, routes: 50, modulesPerVendor: 4 }),
    RangeError
  );
});

import { assignCliques } from '../scripts/generate-case.mjs';

test('every clique is a distinct non-empty route subset', () => {
  const subsets = assignCliques(899, 100);
  assert.equal(subsets.length, 899);
  const seen = new Set(subsets.map((s) => s.join(',')));
  assert.equal(seen.size, 899, 'subsets must be distinct');
  for (const s of subsets) {
    assert.ok(s.length > 0, 'subset must be non-empty');
    assert.ok(s.every((r) => r >= 0 && r < 100), 'route indices in range');
  }
});

test('clique assignment is deterministic', () => {
  assert.deepEqual(assignCliques(50, 10), assignCliques(50, 10));
});

test('cliques spread across the whole route surface, not a few routes', () => {
  // Regression guard. An earlier bit-encoding implementation was distinct but
  // degenerate: at cliques=9699 / routes=300 only 14 routes carried any vendor
  // and route 0 alone imported half the vendor graph. Chunk count was still
  // correct, so only a load check catches this.
  const routes = 300;
  const subsets = assignCliques(9699, routes);
  const load = new Array(routes).fill(0);
  for (const sub of subsets) for (const r of sub) load[r]++;
  const used = load.filter((n) => n > 0).length;
  assert.equal(used, routes, 'every route must carry at least one vendor');
  const max = Math.max(...load);
  const min = Math.min(...load);
  assert.ok(max / min < 3, `route load too skewed: ${min}..${max}`);
});

test('subsets vary in size rather than all being identical', () => {
  const sizes = new Set(assignCliques(899, 100).map((s) => s.length));
  assert.ok(sizes.size > 1, `expected mixed subset sizes, got ${[...sizes]}`);
});
