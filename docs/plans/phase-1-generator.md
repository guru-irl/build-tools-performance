# Synthetic Bundler Scaling Benchmark — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a deterministic case generator for the public benchmark fork that dials chunk count and module count independently, and commit the two smallest cases with proof the mechanism holds under a realistic (minified, non-trivial-module) pipeline.

**Architecture:** A single monolithic generator script takes a parameter object and writes a complete case directory (sources + rspack config + Vite config). Chunk count is produced by giving each synthetic vendor package a distinct subset of routes to be imported by; a nameless splitChunks cache group then emits one chunk per distinct subset. Module count is dialled separately via route-private app components. Generated cases are committed to git, matching the upstream repo's convention.

**Tech Stack:** Node 22 (`node:test`, no new test deps), rspack 2.1.10, Vite 8.2.1, pnpm workspaces.

## Global Constraints

- **Repo is PUBLIC.** No product, company, internal package, registry, codename, or employee identifiers in code, comments, fixtures, filenames, commit messages, or docs. Case names are structural only (`m10k-c1k`).
- **The local `.npmrc` pointing at the internal package proxy must never be committed.** It is required to install locally (public npm is unreachable from this environment) and must be in `.gitignore`.
- **Minification ON and module bodies non-trivial in every committed case.** A trivial-module / `minimize:false` build understates per-chunk cost by ~3 orders of magnitude and invalidates the measurement.
- **rspack and Vite only.** webpack is out of scope.
- Formulas that must hold exactly: `chunks = D + R + 1` and `modules = D×k + A + R + 1`, where `D` = distinct cliques (vendor packages), `R` = routes, `k` = modules per vendor package, `A` = app component modules.
- `k` is fixed at **4** for all committed cases so it is never a confound.
- Generator must be **deterministic**: same params ⇒ byte-identical tree.
- Never write scratch to `/tmp`, `$TMPDIR`, or `/var/tmp`.

---

## File Structure

| File | Responsibility |
|---|---|
| `scripts/generate-case.mjs` | Monolithic generator: shape math, clique assignment, file emission, config emission |
| `test/shape.test.mjs` | Unit tests for the two formulas and clique distinctness |
| `test/generate.test.mjs` | Determinism and file-count tests |
| `test/build.test.mjs` | Build-level assertions: rspack chunk count, Vite chunk count, collision merge |
| `scripts/check-public-safety.mjs` | Generic pre-push scanner (no internal denylist committed) |
| `cases/m10k-c1k/` | Committed case: 10k modules, 1k chunks |
| `cases/m50k-c1k/` | Committed case: 50k modules, 1k chunks |
| `.gitignore` | Add local `.npmrc` |

---

### Task 0: Local setup

**Files:**
- Create: `.npmrc` (local only, never committed)
- Modify: `.gitignore`

**Interfaces:**
- Produces: `@rspack/core` and `vite` resolvable from the repo root, so test files can import them directly.

- [ ] **Step 1: Ignore the local registry file BEFORE creating it**

```bash
printf '\n# local-only registry auth, never commit\n.npmrc\n\n# generator scratch\n.tmp-*/\n' >> .gitignore
git add .gitignore && git commit -m "chore: ignore local npmrc and generator scratch"
```

- [ ] **Step 2: Verify it is actually ignored**

Run: `git check-ignore -v .npmrc`
Expected: a line naming `.gitignore` as the source. If this prints nothing, STOP — the credential file would be committed.

- [ ] **Step 3: Create the local registry file**

Public npm is unreachable from this environment; an internal proxy is used instead. Obtain the registry URL from the local environment rather than hardcoding it here.

```bash
# The monorepo's own auth tool refreshes credentials in ~/.npmrc.
# Then point this repo at the same proxy:
echo "registry=<internal-proxy-url>" > .npmrc
chmod 600 .npmrc
```

- [ ] **Step 4: Install the two bundlers at the repo root**

Run: `pnpm add -D -w @rspack/core@latest vite@latest`
Expected: both resolve. Verify:

```bash
node -e "console.log('rspack', require('@rspack/core/package.json').version)"
node -e "console.log('vite', require('vite/package.json').version)"
```
Expected: rspack `2.1.x`, vite `8.x`.

- [ ] **Step 5: Confirm nothing sensitive is staged**

Run: `git status --porcelain | grep -F '.npmrc'`
Expected: no output.

---

### Task 1: Case shape math

**Files:**
- Create: `scripts/generate-case.mjs`
- Test: `test/shape.test.mjs`

**Interfaces:**
- Produces: `computeCaseShape({ targetModules, targetChunks, routes, modulesPerVendor }) → { routes, cliques, modulesPerVendor, vendorModules, appModules, totalModules, totalChunks }`. Throws `RangeError` if the shape is unsatisfiable.

- [ ] **Step 1: Write the failing test**

```js
// test/shape.test.mjs
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
  assert.equal(s.totalChunks, 1000);
  assert.equal(s.totalModules, 50000);
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/shape.test.mjs`
Expected: FAIL — `Cannot find module '../scripts/generate-case.mjs'`

- [ ] **Step 3: Write minimal implementation**

```js
// scripts/generate-case.mjs

/**
 * Chunk count is produced by distinct vendor consumer-sets ("cliques"), one
 * chunk each, plus one chunk per route plus the entry:
 *   chunks  = cliques + routes + 1
 *   modules = cliques*modulesPerVendor + appModules + routes + 1
 */
export function computeCaseShape({ targetModules, targetChunks, routes, modulesPerVendor }) {
  const cliques = targetChunks - routes - 1;
  if (cliques < 1) {
    throw new RangeError(`targetChunks ${targetChunks} too small for ${routes} routes`);
  }
  // Each clique is a distinct non-empty subset of routes, encoded in binary,
  // so we need enough routes to encode `cliques` distinct values.
  if (cliques > 2 ** routes - 1) {
    throw new RangeError(`${routes} routes cannot encode ${cliques} distinct cliques`);
  }
  const vendorModules = cliques * modulesPerVendor;
  const appModules = targetModules - vendorModules - routes - 1;
  if (appModules < 0) {
    throw new RangeError(
      `vendor modules (${vendorModules}) exceed module budget ${targetModules}`
    );
  }
  return {
    routes,
    cliques,
    modulesPerVendor,
    vendorModules,
    appModules,
    totalModules: vendorModules + appModules + routes + 1,
    totalChunks: cliques + routes + 1,
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test test/shape.test.mjs`
Expected: PASS, 4 tests

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-case.mjs test/shape.test.mjs
git commit -m "feat: add case shape math with exact chunk/module formulas"
```

---

### Task 2: Clique assignment

**Files:**
- Modify: `scripts/generate-case.mjs`
- Test: `test/shape.test.mjs`

**Interfaces:**
- Produces: `assignCliques(cliques, routes) → number[][]` — index `i` is the sorted route-index array that vendor `i` is imported by. Every entry distinct and non-empty.

- [ ] **Step 1: Write the failing test**

```js
// append to test/shape.test.mjs
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/shape.test.mjs`
Expected: FAIL — `assignCliques is not a function`

- [ ] **Step 3: Write minimal implementation**

```js
// append to scripts/generate-case.mjs

/**
 * Vendor i is imported by the route subset encoded by the bits of (i+1).
 * Distinctness is guaranteed by construction, and i+1 is never 0 so no
 * subset is empty. Deterministic with no RNG.
 */
export function assignCliques(cliques, routes) {
  const out = [];
  for (let i = 0; i < cliques; i++) {
    const n = i + 1;
    const subset = [];
    for (let r = 0; r < routes; r++) {
      if ((n >> r) & 1) subset.push(r);
    }
    out.push(subset);
  }
  return out;
}
```

Note: `n >> r` is only valid for `r < 31`. For `routes > 31` use `BigInt`:

```js
export function assignCliques(cliques, routes) {
  const out = [];
  for (let i = 0; i < cliques; i++) {
    const n = BigInt(i + 1);
    const subset = [];
    for (let r = 0; r < routes; r++) {
      if ((n >> BigInt(r)) & 1n) subset.push(r);
    }
    out.push(subset);
  }
  return out;
}
```

Use the `BigInt` version — `routes` is 100 and 300 in the committed cases.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test test/shape.test.mjs`
Expected: PASS, 6 tests

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-case.mjs test/shape.test.mjs
git commit -m "feat: add deterministic distinct clique assignment"
```

---

### Task 3: Source emission with non-trivial module bodies

**Files:**
- Modify: `scripts/generate-case.mjs`
- Test: `test/generate.test.mjs`

**Interfaces:**
- Produces: `generateCase(params, outDir) → shape` where `params` is the `case.params.json` object. Writes `src/`, `index.html`, `case.params.json`.

- [ ] **Step 1: Write the failing test**

```js
// test/generate.test.mjs
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/generate.test.mjs`
Expected: FAIL — `generateCase is not a function`

- [ ] **Step 3: Write minimal implementation**

```js
// append to scripts/generate-case.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

// Non-trivial body: real imports, a component, and enough surface that the
// minifier and transformer have actual work to do. Files are block-padded to
// 4 KB on disk anyway, so this weight is free.
function vendorModuleBody(v, m) {
  return `const PREFIX_${m} = 'v${v}_i${m}';
export function compute${m}(input) {
  const parts = String(input).split('').map((c, i) => c.charCodeAt(0) + i);
  const total = parts.reduce((a, b) => a + b, 0);
  return { id: PREFIX_${m}, total, parts: parts.slice(0, 4) };
}
export const meta${m} = { name: PREFIX_${m}, version: '1.0.${m}', pure: true };
export default compute${m};
`;
}

function vendorIndexBody(v, k) {
  const imports = Array.from({ length: k - 1 }, (_, m) =>
    `import compute${m}, { meta${m} } from './i${m}.js';`).join('\n');
  const uses = Array.from({ length: k - 1 }, (_, m) => `compute${m}(seed)`).join(', ');
  const metas = Array.from({ length: k - 1 }, (_, m) => `meta${m}`).join(', ');
  return `${imports}
const NAME = 'vendor_${v}';
export function vendor${v}(seed = ${v}) {
  const results = [${uses}];
  const metas = [${metas}];
  return { name: NAME, results, metas, checksum: results.reduce((a, r) => a + r.total, 0) };
}
export default vendor${v};
`;
}

function appComponentBody(i) {
  return `import React from 'react';
const LABEL_${i} = 'component_${i}';
export function Component${i}({ value = ${i}, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_${i}, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_${i}, 'data-value': derived.doubled }, children);
}
export default Component${i};
`;
}

function routeBody(r, vendorIds, componentIds) {
  const vImports = vendorIds.map((v) => `import vendor${v} from '../vendors/v${v}/index.js';`).join('\n');
  const cImports = componentIds.map((c) => `import Component${c} from '../components/c${c}.jsx';`).join('\n');
  const vCalls = vendorIds.map((v) => `vendor${v}()`).join(', ');
  const cEls = componentIds.map((c) => `React.createElement(Component${c}, { key: ${c} })`).join(', ');
  return `import React from 'react';
${vImports}
${cImports}
export function Route${r}() {
  const data = [${vCalls}];
  return React.createElement('section', { className: 'route_${r}', 'data-n': data.length }, [${cEls}]);
}
export default Route${r};
`;
}

export function generateCase(params, outDir) {
  const shape = computeCaseShape(params);
  const { routes, cliques, modulesPerVendor: k, appModules } = shape;
  const subsets = assignCliques(cliques, routes);

  mkdirSync(path.join(outDir, 'src/vendors'), { recursive: true });
  mkdirSync(path.join(outDir, 'src/routes'), { recursive: true });
  mkdirSync(path.join(outDir, 'src/components'), { recursive: true });

  const routeVendors = Array.from({ length: routes }, () => []);
  for (let v = 0; v < cliques; v++) {
    const dir = path.join(outDir, `src/vendors/v${v}`);
    mkdirSync(dir, { recursive: true });
    for (let m = 0; m < k - 1; m++) {
      writeFileSync(path.join(dir, `i${m}.js`), vendorModuleBody(v, m));
    }
    writeFileSync(path.join(dir, 'index.js'), vendorIndexBody(v, k));
    for (const r of subsets[v]) routeVendors[r].push(v);
  }

  // App components are route-private: each belongs to exactly one route, so
  // they add modules without creating new cliques.
  const routeComponents = Array.from({ length: routes }, () => []);
  for (let c = 0; c < appModules; c++) {
    writeFileSync(path.join(outDir, `src/components/c${c}.jsx`), appComponentBody(c));
    routeComponents[c % routes].push(c);
  }

  for (let r = 0; r < routes; r++) {
    writeFileSync(
      path.join(outDir, `src/routes/r${r}.jsx`),
      routeBody(r, routeVendors[r], routeComponents[r])
    );
  }

  const entry = Array.from({ length: routes }, (_, r) =>
    `import('./routes/r${r}.jsx');`).join('\n');
  writeFileSync(path.join(outDir, 'src/index.jsx'), `${entry}\n`);

  writeFileSync(path.join(outDir, 'case.params.json'), JSON.stringify(params, null, 2) + '\n');
  writeFileSync(path.join(outDir, 'index.html'),
    '<!doctype html><html><body><div id="root"></div><script type="module" src="/src/index.jsx"></script></body></html>\n');

  return shape;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test test/generate.test.mjs`
Expected: PASS, 3 tests

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-case.mjs test/generate.test.mjs
git commit -m "feat: emit case sources with non-trivial module bodies"
```

---

### Task 4: rspack config with nameless catch-all and minification

**Files:**
- Modify: `scripts/generate-case.mjs`
- Test: `test/build.test.mjs`

**Interfaces:**
- Produces: `generateCase` additionally writes `rspack.config.mjs` into the case dir.

- [ ] **Step 1: Write the failing test**

```js
// test/build.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import path from 'node:path';
import { generateCase } from '../scripts/generate-case.mjs';
import { rspack } from '@rspack/core';

const PARAMS = {
  name: 'tiny', seed: 1, targetModules: 400, targetChunks: 60,
  routes: 12, modulesPerVendor: 4, collisionVendors: 0,
};

function buildRspack(dir) {
  return new Promise((resolve, reject) => {
    import(path.join(dir, 'rspack.config.mjs')).then(({ default: config }) => {
      rspack({ ...config, context: dir }, (err, stats) => {
        if (err) return reject(err);
        if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true })));
        resolve(stats.toJson({ chunks: true, modules: true, assets: false }));
      });
    });
  });
}

test('rspack emits exactly D + R + 1 chunks, minified', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-build-'));
  try {
    const shape = generateCase(PARAMS, dir);
    const json = await buildRspack(dir);
    assert.equal(json.chunks.length, shape.totalChunks);
    const cfg = (await import(path.join(dir, 'rspack.config.mjs'))).default;
    assert.notEqual(cfg.optimization.minimize, false, 'minification must be enabled');
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/build.test.mjs`
Expected: FAIL — cannot resolve `rspack.config.mjs`

- [ ] **Step 3: Write minimal implementation**

Append to `generateCase`, before the `return shape;` line:

```js
  writeFileSync(path.join(outDir, 'rspack.config.mjs'), `import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: { main: './src/index.jsx' },
  output: { path: path.join(__dirname, 'dist'), clean: true },
  resolve: { extensions: ['...', '.jsx'] },
  module: {
    rules: [
      {
        test: /\\.jsx$/,
        use: {
          loader: 'builtin:swc-loader',
          options: { jsc: { parser: { syntax: 'ecmascript', jsx: true } } },
        },
      },
    ],
  },
  optimization: {
    // Minification is mandatory: with it disabled, per-chunk cost is
    // understated by roughly three orders of magnitude.
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        default: false,
        defaultVendors: false,
        // NO \`name\`: a nameless cache group emits one chunk per distinct
        // clique of consuming chunks. This is what makes chunk count a dial.
        vendorCliques: {
          test: /[\\\\/]vendors[\\\\/]/,
          chunks: 'all',
          minSize: 0,
          minChunks: 1,
          priority: -10,
        },
      },
    },
  },
};
`);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test test/build.test.mjs`
Expected: PASS, 1 test

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-case.mjs test/build.test.mjs
git commit -m "feat: emit rspack config with nameless clique cache group"
```

---

### Task 5: Vite config and cross-tool chunk comparison

**Files:**
- Modify: `scripts/generate-case.mjs`
- Test: `test/build.test.mjs`

**Interfaces:**
- Produces: `generateCase` additionally writes `vite.config.mjs`.

- [ ] **Step 1: Write the failing test**

```js
// append to test/build.test.mjs
import { build as viteBuild } from 'vite';

async function buildVite(dir) {
  const res = await viteBuild({
    configFile: path.join(dir, 'vite.config.mjs'),
    root: dir,
    logLevel: 'error',
    build: { write: true, minify: true, target: 'es2022',
             rollupOptions: { input: path.join(dir, 'src/index.jsx') } },
  });
  const out = Array.isArray(res) ? res[0].output : res.output;
  return out.filter((o) => o.type === 'chunk').length;
}

test('vite reaches a comparable chunk count with no manual chunk config', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-vite-'));
  try {
    const shape = generateCase(PARAMS, dir);
    const viteChunks = await buildVite(dir);
    // Rolldown merges very small chunks, so allow 10% tolerance; the point is
    // that Vite reaches this natively while rspack needs an explicit group.
    const lo = shape.totalChunks * 0.9;
    assert.ok(viteChunks >= lo,
      `vite ${viteChunks} chunks vs rspack target ${shape.totalChunks}`);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/build.test.mjs`
Expected: FAIL — cannot resolve `vite.config.mjs`

- [ ] **Step 3: Write minimal implementation**

Append to `generateCase`, before `return shape;`:

```js
  writeFileSync(path.join(outDir, 'vite.config.mjs'), `import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// No manual chunk configuration on purpose. Rollup/Rolldown groups modules by
// reachability signature, which is natively the same clique grouping the
// generator synthesizes. rspack needs an explicit nameless cache group to
// match this; that asymmetry is a finding, not a defect.
export default {
  root: __dirname,
  logLevel: 'error',
  esbuild: { jsx: 'automatic' },
  build: {
    minify: true,
    target: 'es2022',
    outDir: path.join(__dirname, 'dist-vite'),
    rollupOptions: { input: path.join(__dirname, 'src/index.jsx') },
  },
};
`);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test test/build.test.mjs`
Expected: PASS, 2 tests

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-case.mjs test/build.test.mjs
git commit -m "feat: emit vite config and assert comparable chunk count"
```

---

### Task 6: Invariance controls — collision merge and module-axis orthogonality

**Files:**
- Modify: `scripts/generate-case.mjs`
- Test: `test/build.test.mjs`

**Interfaces:**
- Consumes: `params.collisionVendors` (integer, default 0).
- Produces: `computeCaseShape` accounts for collision vendors; they add modules but **not** chunks.

- [ ] **Step 1: Write the failing test**

```js
// append to test/build.test.mjs
test('collision vendors add modules but not chunks', async () => {
  const dir = mkdtempSync(path.join(process.cwd(), '.tmp-coll-'));
  try {
    const base = generateCase(PARAMS, dir);
    rmSync(dir, { recursive: true, force: true });

    const dir2 = mkdtempSync(path.join(process.cwd(), '.tmp-coll2-'));
    const withColl = generateCase({ ...PARAMS, collisionVendors: 10, targetModules: 440 }, dir2);
    const json = await buildRspack(dir2);
    assert.equal(json.chunks.length, base.totalChunks,
      'collision vendors must merge into one existing chunk, adding none');
    rmSync(dir2, { recursive: true, force: true });
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/build.test.mjs`
Expected: FAIL — chunk count higher than base, because collision vendors currently get distinct subsets

- [ ] **Step 3: Write minimal implementation**

In `computeCaseShape`, add collision accounting:

```js
export function computeCaseShape({ targetModules, targetChunks, routes, modulesPerVendor, collisionVendors = 0 }) {
  const cliques = targetChunks - routes - 1;
  if (cliques < 1) throw new RangeError(`targetChunks ${targetChunks} too small for ${routes} routes`);
  if (cliques > 2 ** routes - 1) throw new RangeError(`${routes} routes cannot encode ${cliques} distinct cliques`);
  // Collision vendors duplicate an existing subset, so they add modules but no chunks.
  const vendorModules = (cliques + collisionVendors) * modulesPerVendor;
  const appModules = targetModules - vendorModules - routes - 1;
  if (appModules < 0) throw new RangeError(`vendor modules (${vendorModules}) exceed module budget ${targetModules}`);
  return {
    routes, cliques, collisionVendors, modulesPerVendor, vendorModules, appModules,
    totalModules: vendorModules + appModules + routes + 1,
    totalChunks: cliques + routes + 1,
  };
}
```

In `generateCase`, after the main vendor loop, emit collision vendors reusing `subsets[0]`:

```js
  for (let c = 0; c < (shape.collisionVendors || 0); c++) {
    const v = cliques + c;
    const dir = path.join(outDir, `src/vendors/v${v}`);
    mkdirSync(dir, { recursive: true });
    for (let m = 0; m < k - 1; m++) {
      writeFileSync(path.join(dir, `i${m}.js`), vendorModuleBody(v, m));
    }
    writeFileSync(path.join(dir, 'index.js'), vendorIndexBody(v, k));
    // Deliberately reuse subset 0 so this vendor shares an existing clique.
    for (const r of subsets[0]) routeVendors[r].push(v);
  }
```

Move this loop **above** the route-emission loop so the route bodies include the collision vendors.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test test/build.test.mjs`
Expected: PASS, 3 tests

- [ ] **Step 5: Write the orthogonality test**

This is the control that makes the whole grid meaningful: module count must be able to move without disturbing chunk count.

```js
// append to test/build.test.mjs
test('module axis is orthogonal to chunk axis', async () => {
  const results = [];
  for (const k of [2, 4, 8]) {
    const dir = mkdtempSync(path.join(process.cwd(), `.tmp-orth-${k}-`));
    try {
      // Hold cliques and routes fixed; only k varies, so modules move and
      // chunks must not.
      const cliques = 47, routes = 12;
      const targetChunks = cliques + routes + 1;
      const targetModules = cliques * k + 199 + routes + 1;
      const shape = generateCase(
        { ...PARAMS, targetModules, targetChunks, routes, modulesPerVendor: k }, dir);
      const json = await buildRspack(dir);
      results.push({ k, chunks: json.chunks.length, modules: shape.totalModules });
    } finally { rmSync(dir, { recursive: true, force: true }); }
  }
  const chunkCounts = new Set(results.map((r) => r.chunks));
  assert.equal(chunkCounts.size, 1,
    `chunk count must not move with k: ${JSON.stringify(results)}`);
  assert.ok(results[2].modules > results[0].modules * 1.5,
    `module count must actually grow: ${JSON.stringify(results)}`);
});
```

- [ ] **Step 6: Run test to verify it passes**

Run: `node --test test/build.test.mjs`
Expected: PASS, 4 tests. All three `k` values report the same chunk count while module counts differ.

- [ ] **Step 7: Commit**

```bash
git add scripts/generate-case.mjs test/build.test.mjs
git commit -m "feat: add collision merge and module-axis orthogonality controls"
```

---

### Task 7: Public-safety checker and gitignore

**Files:**
- Create: `scripts/check-public-safety.mjs`
- Modify: `.gitignore`
- Test: `test/safety.test.mjs`

**Interfaces:**
- Produces: `scanText(text) → string[]` (list of violation descriptions, empty if clean).

- [ ] **Step 1: Write the failing test**

<!-- safety-check: ignore-next-block -- this fenced block quotes the Task 7 brief's own test/safety.test.mjs fixtures verbatim (RFC-2606 .invalid hosts, an obviously-fake abc123 placeholder), not a real leak; see C3 in .superpowers/sdd/task-7-fix-report.md and docs/public-safety.md -->

```js
// test/safety.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scanText } from '../scripts/check-public-safety.mjs';

// Fixtures deliberately use RFC-reserved `.invalid` hosts. Naming real
// internal hosts here would itself leak them into a public repo.
test('flags any registry that is not public npm', () => {
  assert.ok(scanText('registry=https://feed.example.invalid/npm/').length > 0);
});

test('flags credential material', () => {
  assert.ok(scanText('//feed.example.invalid/:_authToken=abc123').length > 0);
  assert.ok(scanText('//feed.example.invalid/:_password=abc123').length > 0);
});

test('flags URLs whose host is not on the public allowlist', () => {
  assert.ok(scanText('see https://intranet.example.invalid/repo').length > 0);
});

test('passes clean public content', () => {
  assert.deepEqual(scanText("import { rspack } from '@rspack/core';"), []);
  assert.deepEqual(scanText('registry=https://registry.npmjs.org/'), []);
  assert.deepEqual(scanText('https://github.com/rstackjs/build-tools-performance'), []);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/safety.test.mjs`
Expected: FAIL — module not found

- [ ] **Step 3: Write minimal implementation**

```js
// scripts/check-public-safety.mjs
// ALLOWLIST-based on purpose. A denylist of internal hostnames or codenames,
// committed to a public repo, would itself be the leak — including in this
// file's own test fixtures. So we assert what is permitted and flag everything
// else. Environment-specific terms live in an uncommitted local file supplied
// via SAFETY_DENYLIST_FILE.
import { readFileSync, existsSync } from 'node:fs';

const PUBLIC_HOSTS = new Set([
  'registry.npmjs.org',
  'github.com',
  'raw.githubusercontent.com',
  'nodejs.org',
  'rspack.rs',
  'vite.dev',
  'rollupjs.org',
  'example.com',
]);

export function scanText(text) {
  const found = [];

  if (/_authToken\s*=/i.test(text)) found.push('credential material (_authToken)');
  if (/_password\s*=/i.test(text)) found.push('credential material (_password)');

  for (const m of text.matchAll(/^\s*registry\s*=\s*(\S+)/gim)) {
    let host;
    try { host = new URL(m[1]).hostname.toLowerCase(); }
    catch { found.push('unparseable registry value'); continue; }
    if (host !== 'registry.npmjs.org') found.push(`non-public registry: ${host}`);
  }

  for (const m of text.matchAll(/https?:\/\/([a-z0-9.-]+)/gi)) {
    const host = m[1].toLowerCase();
    if (!PUBLIC_HOSTS.has(host)) found.push(`non-allowlisted host: ${host}`);
  }

  const extra = process.env.SAFETY_DENYLIST_FILE;
  if (extra && existsSync(extra)) {
    for (const line of readFileSync(extra, 'utf8').split('\n')) {
      const term = line.trim();
      if (term && !term.startsWith('#') && new RegExp(term, 'i').test(text)) {
        found.push('local denylist term');
      }
    }
  }

  return found;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test test/safety.test.mjs`
Expected: PASS, 4 tests

- [ ] **Step 5: Add gitignore entries and commit**

The gitignore entries were added in Task 0; verify they are still present, then commit the checker.

```bash
git check-ignore -v .npmrc
git add scripts/check-public-safety.mjs test/safety.test.mjs
git commit -m "chore: add generic public-safety checker"
```

---

### Task 8: Generate and commit the two Phase 1 cases

**Files:**
- Create: `cases/m10k-c1k/`, `cases/m50k-c1k/`
- Create: `scripts/generate-all.mjs`
- Modify: `package.json` (add `test` and `generate` scripts)

**Interfaces:**
- Consumes: `generateCase` from Task 3.

- [ ] **Step 1: Write the generation driver**

```js
// scripts/generate-all.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateCase } from './generate-case.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CASES = [
  { name: 'm10k-c1k', seed: 1, targetModules: 10000, targetChunks: 1000, routes: 100, modulesPerVendor: 4, collisionVendors: 0 },
  { name: 'm50k-c1k', seed: 1, targetModules: 50000, targetChunks: 1000, routes: 300, modulesPerVendor: 4, collisionVendors: 0 },
];

for (const params of CASES) {
  const dir = path.join(__dirname, '..', 'cases', params.name);
  const shape = generateCase(params, dir);
  console.log(`${params.name}: ${shape.totalModules} modules, ${shape.totalChunks} chunks`);
}
```

- [ ] **Step 2: Add npm scripts**

```bash
node -e "const p=require('./package.json');p.scripts={...p.scripts,test:'node --test test/',generate:'node scripts/generate-all.mjs'};require('fs').writeFileSync('package.json',JSON.stringify(p,null,2)+'\n')"
```

- [ ] **Step 3: Run generation**

Run: `pnpm generate`
Expected:
```
m10k-c1k: 10000 modules, 1000 chunks
m50k-c1k: 50000 modules, 1000 chunks
```

- [ ] **Step 4: Verify both cases build and hit their targets**

Run:
```bash
node -e "
import('./scripts/generate-case.mjs').then(async () => {
  const { rspack } = await import('@rspack/core');
  for (const c of ['m10k-c1k','m50k-c1k']) {
    const dir = new URL('./cases/'+c+'/', import.meta.url).pathname;
    const cfg = (await import(dir+'rspack.config.mjs')).default;
    await new Promise((res, rej) => rspack({...cfg, context: dir}, (e, s) => {
      if (e || s.hasErrors()) return rej(e || new Error(s.toString({all:false,errors:true})));
      const j = s.toJson({chunks:true, modules:true, assets:false});
      console.log(c, 'chunks:', j.chunks.length, 'modules:', j.modules.length);
      res();
    }));
  }
});
"
```
Expected: `m10k-c1k chunks: 1000` and `m50k-c1k chunks: 1000`, module counts within 1% of 10000 / 50000.

Record the wall-clock time of each build; do not document expected runtimes until this step produces real numbers.

- [ ] **Step 5: Run the safety checker over the generated tree**

Run: `node -e "
import('./scripts/check-public-safety.mjs').then(async ({scanText}) => {
  const { execFileSync } = await import('node:child_process');
  const files = execFileSync('git',['ls-files','cases/'],{encoding:'utf8'}).trim().split('\n').filter(Boolean);
  const fs = await import('node:fs');
  let bad = 0;
  for (const f of files) { const v = scanText(fs.readFileSync(f,'utf8')); if (v.length) { console.log(f, v); bad++; } }
  console.log(bad === 0 ? 'CLEAN' : bad + ' FILES WITH VIOLATIONS');
});
"`
Expected: `CLEAN`

- [ ] **Step 6: Commit**

```bash
git add scripts/generate-all.mjs package.json cases/m10k-c1k cases/m50k-c1k
git commit -m "feat: add m10k-c1k and m50k-c1k generated cases"
```

---

## Phase 1 Done Criteria

- `pnpm test` passes all suites (shape, generate, build, safety).
- `chunks == D + R + 1` holds exactly for both committed cases.
- Module counts land within 1% of target.
- **Module-axis orthogonality proven: varying `k` moves module count without moving chunk count.**
- Minification is on and vendor module bodies are ≥ 200 bytes.
- Vite reaches ≥ 90% of the rspack chunk count with no manual chunk config.
- Collision vendors add modules but zero chunks.
- Safety checker reports `CLEAN` across all committed case files.
- `.npmrc` is git-ignored and unstaged.
- Real wall-clock times recorded for both cases (no estimates).
