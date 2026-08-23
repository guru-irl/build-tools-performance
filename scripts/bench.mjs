/**
 * Benchmark harness for the synthetic chunk-scaling cases.
 *
 * Design constraints, each of which was established by measurement rather than
 * assumption (see docs/design/synthetic-chunk-scaling.md):
 *
 * 1. Every build runs in its OWN child process. Running rspack and Vite in one
 *    process exhausted the heap on the 50k-module case.
 * 2. Chunk counts are read with `toJson({ all: false, chunks: true })`. `all`
 *    defaults to true, so opting individual fields out still leaves module
 *    sources and reasons enabled; the unscoped call cost ~3.6 s on the 10k case
 *    (7x the build itself) and exhausted an 8 GB heap on the 50k case.
 * 3. A warmup run is executed and discarded, then N measured runs. Never report
 *    a single run.
 * 4. The output directory is removed before every run so no build reuses work.
 * 5. Raw results are written as JSON and CSV before any plotting, so charts are
 *    always regenerable from data.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { cpus, totalmem, platform, release, arch } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RUNNER = path.join(ROOT, 'scripts', 'bench-run-one.mjs');

/** Cases to measure. Each is generated on demand from these params. */
export const GRID = [
  { name: 'm10k-c1k', targetModules: 10000, targetChunks: 1000, routes: 100, modulesPerVendor: 4 },
  { name: 'm50k-c1k', targetModules: 50000, targetChunks: 1000, routes: 300, modulesPerVendor: 4 },
  { name: 'm50k-c5k', targetModules: 50000, targetChunks: 5000, routes: 300, modulesPerVendor: 4 },
  { name: 'm50k-c10k', targetModules: 50000, targetChunks: 10000, routes: 300, modulesPerVendor: 4 },
  { name: 'm100k-c5k', targetModules: 100000, targetChunks: 5000, routes: 300, modulesPerVendor: 4 },
  { name: 'm100k-c10k', targetModules: 100000, targetChunks: 10000, routes: 300, modulesPerVendor: 4 },
];

export function envFingerprint() {
  const c = cpus();
  let cpuModel = c[0]?.model ?? 'unknown';
  let physical = null;
  try {
    cpuModel = execFileSync('sysctl', ['-n', 'machdep.cpu.brand_string'], { encoding: 'utf8' }).trim();
    physical = Number(execFileSync('sysctl', ['-n', 'hw.physicalcpu'], { encoding: 'utf8' }).trim());
  } catch {
    /* non-macOS: fall back to the os module values above */
  }
  const version = (pkg) => {
    try {
      return JSON.parse(
        execFileSync(process.execPath, ['-e', `console.log(JSON.stringify(require("${pkg}/package.json").version))`], {
          encoding: 'utf8',
          cwd: ROOT,
        })
      );
    } catch {
      return 'unknown';
    }
  };
  return {
    cpuModel,
    logicalCores: c.length,
    physicalCores: physical,
    memGB: Math.round(totalmem() / 1024 ** 3),
    platform: platform(),
    release: release(),
    arch: arch(),
    node: process.version,
    rspack: version('@rspack/core'),
    vite: version('vite'),
    timestamp: new Date().toISOString(),
  };
}

export function median(xs) {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/** Least-squares fit of y = a + b*x, with R^2. */
export function linfit(xs, ys) {
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0;
  let sxx = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) ** 2;
  }
  const slope = sxx === 0 ? 0 : sxy / sxx;
  const intercept = my - slope * mx;
  let ssRes = 0;
  let ssTot = 0;
  for (let i = 0; i < n; i++) {
    ssRes += (ys[i] - (intercept + slope * xs[i])) ** 2;
    ssTot += (ys[i] - my) ** 2;
  }
  return { slope, intercept, r2: ssTot === 0 ? 1 : 1 - ssRes / ssTot, n };
}

/** Run one build in a fresh child process. Returns {ms, chunks} or {error}. */
function runOne(caseDir, tool, heapMB) {
  const args = [];
  if (heapMB) args.push(`--max-old-space-size=${heapMB}`);
  args.push(RUNNER, caseDir, tool);
  try {
    const out = execFileSync(process.execPath, args, {
      encoding: 'utf8',
      cwd: ROOT,
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const line = out.trim().split('\n').filter(Boolean).pop();
    return JSON.parse(line);
  } catch (err) {
    return { error: (err.stderr || err.message || 'unknown').toString().slice(0, 200) };
  }
}

export async function measure({ grid = GRID, runs = 3, tools = ['rspack', 'vite'], heapMB = 8192, outDir, log = console.log }) {
  const { generateCase } = await import(path.join(ROOT, 'scripts', 'generate-case.mjs'));
  const scratch = path.join(ROOT, '.tmp-bench-cases');
  const results = [];

  // Results are flushed after every case. A sweep is long and some parameter
  // combinations are legitimately infeasible (e.g. 10k chunks needs more vendor
  // modules than a 25k module budget allows), so one bad point must never
  // discard the points already measured.
  const flush = () => {
    if (!outDir) return;
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'bench.json'), JSON.stringify({ env: envFingerprint(), runs, results }, null, 2) + '\n');
    const cols = ['case', 'tool', 'targetModules', 'targetChunks', 'routes', 'chunks', 'runs', 'medianMs', 'minMs', 'maxMs', 'spreadPct'];
    const csv = [cols.join(','), ...results.map((r) => cols.map((c) => r[c] ?? '').join(','))].join('\n');
    writeFileSync(path.join(outDir, 'bench.csv'), csv + '\n');
  };

  for (const spec of grid) {
    const { name, ...params } = spec;
    // Prefer a committed case so we measure the artifact people actually get.
    const committed = path.join(ROOT, 'cases', name);
    let caseDir = committed;
    if (!existsSync(path.join(committed, 'rspack.config.mjs'))) {
      caseDir = path.join(scratch, name);
      try {
        rmSync(caseDir, { recursive: true, force: true });
        mkdirSync(caseDir, { recursive: true });
        const t = Date.now();
        generateCase(params, caseDir);
        log(`  generated ${name} in ${Date.now() - t}ms`);
      } catch (err) {
        log(`  ${name.padEnd(12)} SKIPPED (infeasible shape): ${err.message}`);
        results.push({ case: name, tool: null, ...params, error: `infeasible: ${err.message}` });
        flush();
        continue;
      }
    } else {
      log(`  using committed case ${name}`);
    }

    for (const tool of tools) {
      const samples = [];
      let chunks = null;
      let failed = null;
      // Warmup, discarded.
      const warm = runOne(caseDir, tool, heapMB);
      if (warm.error) failed = warm.error;
      for (let i = 0; i < runs && !failed; i++) {
        const r = runOne(caseDir, tool, heapMB);
        if (r.error) {
          failed = r.error;
          break;
        }
        samples.push(r.ms);
        chunks = r.chunks;
      }
      const row = {
        case: name,
        tool,
        targetModules: params.targetModules,
        targetChunks: params.targetChunks,
        routes: params.routes,
        modulesPerVendor: params.modulesPerVendor,
        chunks,
        runs: samples.length,
        samples,
        medianMs: samples.length ? median(samples) : null,
        minMs: samples.length ? Math.min(...samples) : null,
        maxMs: samples.length ? Math.max(...samples) : null,
        spreadPct: samples.length ? +(((Math.max(...samples) - Math.min(...samples)) / median(samples)) * 100).toFixed(1) : null,
        error: failed,
      };
      results.push(row);
      flush();
      log(
        failed
          ? `  ${name.padEnd(12)} ${tool.padEnd(6)} FAILED: ${failed.slice(0, 90)}`
          : `  ${name.padEnd(12)} ${tool.padEnd(6)} median ${String(row.medianMs).padStart(7)}ms  spread ${row.spreadPct}%  chunks ${chunks}`
      );
    }
  }

  if (outDir) {
    flush();
    log(`\n  wrote ${path.relative(ROOT, outDir)}/bench.json and bench.csv`);
  }
  return results;
}

if (import.meta.url === pathToFileURLSafe(process.argv[1])) {
  const runs = Number(process.env.BENCH_RUNS || 3);
  const only = process.env.BENCH_CASES ? process.env.BENCH_CASES.split(',') : null;
  const grid = only ? GRID.filter((g) => only.includes(g.name)) : GRID;
  const env = envFingerprint();
  console.log(`benchmark: ${grid.length} case(s) x ${runs} run(s) + 1 discarded warmup`);
  console.log(`  ${env.cpuModel}, ${env.physicalCores ?? env.logicalCores} cores, ${env.memGB} GB, node ${env.node}`);
  console.log(`  rspack ${env.rspack}, vite ${env.vite}\n`);
  await measure({ grid, runs, outDir: path.join(ROOT, 'docs', 'results') });
}

function pathToFileURLSafe(p) {
  try {
    return new URL(`file://${path.resolve(p)}`).href;
  } catch {
    return '';
  }
}
