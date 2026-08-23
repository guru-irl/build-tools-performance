import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateCase } from './generate-case.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Phase 1 case grid (see docs/design/synthetic-chunk-scaling.md): k is fixed
// at 4 across every case so it is never a confound, and collisionVendors is
// 0 (the collision-merge mechanism is proven by test/build.test.mjs's own
// invariance control, not exercised in the committed cases themselves).
const CASES = [
  { name: 'm10k-c1k', seed: 1, targetModules: 10000, targetChunks: 1000, routes: 100, modulesPerVendor: 4, collisionVendors: 0 },
  { name: 'm50k-c1k', seed: 1, targetModules: 50000, targetChunks: 1000, routes: 300, modulesPerVendor: 4, collisionVendors: 0 },
];

for (const params of CASES) {
  const dir = path.join(__dirname, '..', 'cases', params.name);
  const shape = generateCase(params, dir);
  console.log(`${params.name}: ${shape.totalModules} modules, ${shape.totalChunks} chunks`);
}
