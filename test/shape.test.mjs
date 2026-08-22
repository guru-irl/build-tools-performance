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
