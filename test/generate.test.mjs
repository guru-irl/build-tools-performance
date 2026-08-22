import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { generateCase } from '../scripts/generate-case.mjs';

const PARAMS = {
  name: 'tiny', seed: 1, targetModules: 400, targetChunks: 60,
  routes: 12, modulesPerVendor: 4, collisionVendors: 0,
};

function countFiles(dir) {
  return execFileSync('find', [dir, '-type', 'f', '-name', '*.js*'], { encoding: 'utf8' })
    .trim().split('\n').filter(Boolean).length;
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

test('is deterministic: same params produce byte-identical trees', () => {
  const a = mkdtempSync(path.join(process.cwd(), '.tmp-gen-a-'));
  const b = mkdtempSync(path.join(process.cwd(), '.tmp-gen-b-'));
  try {
    generateCase(PARAMS, a);
    generateCase(PARAMS, b);
    const hash = (d) => execFileSync('bash', ['-c',
      `cd ${d} && find . -type f | sort | xargs shasum | shasum | cut -d' ' -f1`],
      { encoding: 'utf8' }).trim();
    assert.equal(hash(a), hash(b));
  } finally {
    rmSync(a, { recursive: true, force: true });
    rmSync(b, { recursive: true, force: true });
  }
});
