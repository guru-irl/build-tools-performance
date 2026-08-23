/**
 * Loader taxonomy sweep: what does per-module work actually cost?
 *
 * Module count and chunk count are already dials in this benchmark, but on a
 * large real application they explain only a fraction of production build
 * time. The unmodelled remainder is per-module work -- the loader/transform
 * chain. This sweep measures loader BEHAVIOUR CATEGORIES (see loader-core.mjs)
 * rather than any specific real-world loader, so the result generalises:
 * "which kinds of per-module work cost what, and how does each scale".
 *
 * The headline metric is MARGINAL COST PER MODULE: the difference between a
 * build with the category enabled and the same build with no loader rule at
 * all, divided by module count. Reporting the raw build time instead would
 * bury a per-module effect under a large fixed baseline.
 *
 * Note the baseline is "no loader rule at all", not "a loader that returns its
 * input". Those are different, and the difference is exactly the `noop`
 * category: the cost of crossing into JavaScript once per module having done
 * nothing useful.
 *
 * Usage:
 *   node scripts/bench-loaders.mjs
 *   BENCH_RUNS=5 LOADER_CASES=m10k-c1k node scripts/bench-loaders.mjs
 *   LOADER_CATEGORIES=noop,transform-js node scripts/bench-loaders.mjs
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { envFingerprint, median } from './bench.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RUNNER = path.join(ROOT, 'scripts', 'bench-run-one.mjs');

/** Modules per case, needed to convert a build delta into a per-module cost. */
export const CASE_MODULES = {
  'm10k-c1k': 10000,
  'm50k-c1k': 50000,
};

export const DEFAULT_CATEGORIES = [
  null, // baseline: no loader rule at all
  'noop',
  'cpu:1000',
  'cpu:10000',
  'regex',
  'parse-native',
  'parse-js',
  'transform-native',
  'transform-js',
  'emit:1',
];

function runOne(caseDir, tool, spec, heapMB = 8192) {
  const env = { ...process.env };
  if (spec) env.BENCH_LOADER = spec;
  else delete env.BENCH_LOADER;
  try {
    const out = execFileSync(process.execPath, [`--max-old-space-size=${heapMB}`, RUNNER, caseDir, tool], {
      encoding: 'utf8',
      cwd: ROOT,
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe'],
      env,
    });
    return JSON.parse(out.trim().split('\n').filter(Boolean).pop());
  } catch (err) {
    return { error: (err.stderr || err.message || 'unknown').toString().slice(0, 300) };
  }
}

export async function sweep({ cases, categories, runs = 3, tools = ['rspack', 'vite'], outDir, log = console.log }) {
  const results = [];
  const flush = () => {
    if (!outDir) return;
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'loaders.json'), JSON.stringify({ env: envFingerprint(), runs, results }, null, 2) + '\n');
    const cols = ['case', 'tool', 'category', 'modules', 'runs', 'medianMs', 'minMs', 'maxMs', 'spreadPct', 'chunks', 'error'];
    writeFileSync(
      path.join(outDir, 'loaders.csv'),
      [cols.join(','), ...results.map((r) => cols.map((c) => (r[c] ?? '').toString().replace(/,/g, ';')).join(','))].join('\n') + '\n'
    );
  };

  for (const name of cases) {
    const caseDir = path.join(ROOT, 'cases', name);
    if (!existsSync(path.join(caseDir, 'rspack.config.mjs'))) {
      log(`  ${name}: no committed case, skipping`);
      continue;
    }
    for (const tool of tools) {
      for (const category of categories) {
        const samples = [];
        let chunks = null;
        let failed = null;
        const warm = runOne(caseDir, tool, category);
        if (warm.error) failed = warm.error;
        for (let i = 0; i < runs && !failed; i++) {
          const r = runOne(caseDir, tool, category);
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
          category: category ?? '(no loader)',
          modules: CASE_MODULES[name] ?? null,
          runs: samples.length,
          samples,
          medianMs: samples.length ? median(samples) : null,
          minMs: samples.length ? Math.min(...samples) : null,
          maxMs: samples.length ? Math.max(...samples) : null,
          spreadPct: samples.length ? +(((Math.max(...samples) - Math.min(...samples)) / median(samples)) * 100).toFixed(1) : null,
          chunks,
          error: failed,
        };
        results.push(row);
        flush();
        log(
          failed
            ? `  ${name.padEnd(10)} ${tool.padEnd(6)} ${(category ?? '(no loader)').padEnd(17)} FAILED: ${failed.slice(0, 70)}`
            : `  ${name.padEnd(10)} ${tool.padEnd(6)} ${(category ?? '(no loader)').padEnd(17)} median ${String(row.medianMs).padStart(7)}ms  spread ${row.spreadPct}%  chunks ${chunks}`
        );
      }
    }
  }
  flush();
  return results;
}

/** Marginal cost per module of each category, against the no-loader baseline. */
export function perModuleCost(results) {
  const baseline = new Map();
  for (const r of results) {
    if (r.category === '(no loader)' && r.medianMs != null) baseline.set(`${r.case}|${r.tool}`, r.medianMs);
  }
  const out = [];
  for (const r of results) {
    if (r.category === '(no loader)' || r.medianMs == null || !r.modules) continue;
    const base = baseline.get(`${r.case}|${r.tool}`);
    if (base == null) continue;
    const deltaMs = r.medianMs - base;
    out.push({
      case: r.case,
      tool: r.tool,
      category: r.category,
      baseMs: base,
      medianMs: r.medianMs,
      deltaMs,
      usPerModule: +((deltaMs * 1000) / r.modules).toFixed(2),
      overheadPct: +((deltaMs / base) * 100).toFixed(1),
    });
  }
  return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const runs = Number(process.env.BENCH_RUNS || 3);
  const cases = (process.env.LOADER_CASES || 'm10k-c1k').split(',').filter(Boolean);
  const categories = process.env.LOADER_CATEGORIES
    ? [null, ...process.env.LOADER_CATEGORIES.split(',').filter(Boolean)]
    : DEFAULT_CATEGORIES;
  const env = envFingerprint();
  console.log(`loader taxonomy: ${cases.length} case(s) x 2 tools x ${categories.length} categories x ${runs} run(s) + warmup`);
  console.log(`  ${env.cpuModel}, ${env.physicalCores ?? env.logicalCores} cores, ${env.memGB} GB, node ${env.node}`);
  console.log(`  rspack ${env.rspack}, vite ${env.vite}, loadavg ${env.loadavg.join('/')}\n`);
  const results = await sweep({ cases, categories, runs, outDir: path.join(ROOT, 'docs', 'results') });

  console.log('\n  marginal cost per module vs a build with no loader rule at all:');
  console.log(`  ${'case'.padEnd(10)} ${'tool'.padEnd(7)} ${'category'.padEnd(17)} ${'delta'.padStart(9)} ${'us/module'.padStart(10)} ${'overhead'.padStart(9)}`);
  for (const r of perModuleCost(results)) {
    console.log(
      `  ${r.case.padEnd(10)} ${r.tool.padEnd(7)} ${r.category.padEnd(17)} ${(r.deltaMs + 'ms').padStart(9)} ${String(r.usPerModule).padStart(10)} ${(r.overheadPct + '%').padStart(9)}`
    );
  }
  console.log('\n  wrote docs/results/loaders.json and loaders.csv');
}
