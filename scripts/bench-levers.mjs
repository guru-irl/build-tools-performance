/**
 * Lever sweep: measures how source maps and minification interact.
 *
 * Motivation. It is tempting to treat "generate source maps" and "minify" as
 * two independent, additive line items in a build budget, and therefore to
 * attack whichever one measures larger in isolation. This sweep tests that
 * assumption directly by measuring the full 2x2 grid rather than each factor
 * on its own:
 *
 *     maps off / minify on      <- the default, published configuration
 *     maps on  / minify on
 *     maps off / minify off
 *     maps on  / minify off
 *
 * From that grid it computes the MARGINAL cost of minification twice: once
 * with maps off and once with maps on. If the two marginals differ, the
 * factors are not additive and sizing either one in isolation gives a
 * misleading answer about where to invest.
 *
 * Method follows scripts/bench.mjs: one build per child process, output
 * removed before every run, one discarded warmup then N measured runs, raw
 * data written before any summarising.
 *
 * Usage:
 *   node scripts/bench-levers.mjs
 *   BENCH_RUNS=5 BENCH_CASES=m10k-c1k,m50k-c1k node scripts/bench-levers.mjs
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { envFingerprint, median } from './bench.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RUNNER = path.join(ROOT, 'scripts', 'bench-run-one.mjs');

/**
 * The 2x2 grid. `env` is exactly what gets exported to the child; an empty
 * object means "unset", which is the published default (minify on, maps off).
 * Spelling the default as {} rather than as explicit BENCH_MINIFY=1 matters:
 * it proves the default row measures the same code path users get when they
 * set nothing at all.
 */
export const LEVERS = [
  { id: 'base', label: 'maps off, minify on', maps: false, minify: true, env: {} },
  { id: 'maps', label: 'maps on,  minify on', maps: true, minify: true, env: { BENCH_SOURCEMAP: '1' } },
  { id: 'nomin', label: 'maps off, minify off', maps: false, minify: false, env: { BENCH_MINIFY: '0' } },
  { id: 'maps-nomin', label: 'maps on,  minify off', maps: true, minify: false, env: { BENCH_SOURCEMAP: '1', BENCH_MINIFY: '0' } },
];

function runOne(caseDir, tool, env, heapMB = 8192) {
  try {
    const out = execFileSync(process.execPath, [`--max-old-space-size=${heapMB}`, RUNNER, caseDir, tool], {
      encoding: 'utf8',
      cwd: ROOT,
      maxBuffer: 64 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, ...env },
    });
    return JSON.parse(out.trim().split('\n').filter(Boolean).pop());
  } catch (err) {
    return { error: (err.stderr || err.message || 'unknown').toString().slice(0, 200) };
  }
}

export async function sweep({ cases, runs = 3, tools = ['rspack', 'vite'], outDir, log = console.log }) {
  const results = [];
  const flush = () => {
    if (!outDir) return;
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'levers.json'), JSON.stringify({ env: envFingerprint(), runs, results }, null, 2) + '\n');
    const cols = ['case', 'tool', 'lever', 'maps', 'minify', 'runs', 'medianMs', 'minMs', 'maxMs', 'spreadPct', 'chunks'];
    writeFileSync(
      path.join(outDir, 'levers.csv'),
      [cols.join(','), ...results.map((r) => cols.map((c) => r[c] ?? '').join(','))].join('\n') + '\n'
    );
  };

  for (const name of cases) {
    const caseDir = path.join(ROOT, 'cases', name);
    if (!existsSync(path.join(caseDir, 'rspack.config.mjs'))) {
      log(`  ${name}: no committed case, skipping`);
      continue;
    }
    for (const tool of tools) {
      for (const lever of LEVERS) {
        const samples = [];
        let chunks = null;
        let failed = null;
        const warm = runOne(caseDir, tool, lever.env);
        if (warm.error) failed = warm.error;
        for (let i = 0; i < runs && !failed; i++) {
          const r = runOne(caseDir, tool, lever.env);
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
          lever: lever.id,
          maps: lever.maps,
          minify: lever.minify,
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
            ? `  ${name.padEnd(10)} ${tool.padEnd(6)} ${lever.label.padEnd(21)} FAILED: ${failed.slice(0, 70)}`
            : `  ${name.padEnd(10)} ${tool.padEnd(6)} ${lever.label.padEnd(21)} median ${String(row.medianMs).padStart(6)}ms  spread ${row.spreadPct}%`
        );
      }
    }
  }
  flush();
  return results;
}

/**
 * Computes the marginal cost of minification under each map setting.
 * Returns one entry per (case, tool) with both marginals and their ratio.
 */
export function interaction(results) {
  const key = (r) => `${r.case}|${r.tool}`;
  const byPair = new Map();
  for (const r of results) {
    if (r.medianMs == null) continue;
    if (!byPair.has(key(r))) byPair.set(key(r), {});
    byPair.get(key(r))[r.lever] = r.medianMs;
  }
  const out = [];
  for (const [k, v] of byPair) {
    if (v.base == null || v.maps == null || v.nomin == null || v['maps-nomin'] == null) continue;
    const [caseName, tool] = k.split('|');
    // Marginal cost of turning minification ON, measured twice.
    const minifyCostMapsOff = v.base - v.nomin;
    const minifyCostMapsOn = v.maps - v['maps-nomin'];
    out.push({
      case: caseName,
      tool,
      mapsCost: v.maps - v.base,
      minifyCostMapsOff,
      minifyCostMapsOn,
      ratio: minifyCostMapsOff === 0 ? null : +(minifyCostMapsOn / minifyCostMapsOff).toFixed(2),
    });
  }
  return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const runs = Number(process.env.BENCH_RUNS || 3);
  const cases = (process.env.BENCH_CASES || 'm10k-c1k,m50k-c1k').split(',').filter(Boolean);
  const env = envFingerprint();
  console.log(`lever sweep: ${cases.length} case(s) x 2 tools x ${LEVERS.length} levers x ${runs} run(s) + warmup`);
  console.log(`  ${env.cpuModel}, ${env.physicalCores ?? env.logicalCores} cores, ${env.memGB} GB, node ${env.node}`);
  console.log(`  rspack ${env.rspack}, vite ${env.vite}\n`);
  const results = await sweep({ cases, runs, outDir: path.join(ROOT, 'docs', 'results') });

  console.log('\n  marginal cost of minification, measured under each map setting:');
  console.log(`  ${'case'.padEnd(10)} ${'tool'.padEnd(7)} ${'maps cost'.padStart(10)} ${'minify|maps off'.padStart(16)} ${'minify|maps on'.padStart(15)} ${'ratio'.padStart(6)}`);
  for (const r of interaction(results)) {
    console.log(
      `  ${r.case.padEnd(10)} ${r.tool.padEnd(7)} ${(r.mapsCost + 'ms').padStart(10)} ${(r.minifyCostMapsOff + 'ms').padStart(16)} ${(r.minifyCostMapsOn + 'ms').padStart(15)} ${String(r.ratio ?? '-').padStart(6)}`
    );
  }
  console.log('\n  wrote docs/results/levers.json and levers.csv');
}
