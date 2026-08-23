/**
 * Runs exactly ONE build in this process and prints a single JSON line.
 *
 * Isolated on purpose: building both bundlers in one process exhausted the heap
 * on the 50k-module case. Keeping one build per process also means a crash is
 * attributable to a specific (case, tool) pair rather than poisoning a whole
 * sweep.
 *
 * Usage: node bench-run-one.mjs <caseDir> <rspack|vite>
 */
import { rmSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [, , caseDir, tool] = process.argv;

if (!caseDir || !tool) {
  console.error('usage: bench-run-one.mjs <caseDir> <rspack|vite>');
  process.exit(2);
}

const dir = path.resolve(caseDir);

async function loadConfig(file) {
  return (await import(pathToFileURL(path.join(dir, file)).href)).default;
}

try {
  if (tool === 'rspack') {
    const { rspack } = await import('@rspack/core');
    const cfg = await loadConfig('rspack.config.mjs');
    // Remove prior output so no run reuses work from a previous one.
    rmSync(cfg.output?.path ?? path.join(dir, 'dist'), { recursive: true, force: true });
    const t = Date.now();
    await new Promise((resolve, reject) => {
      rspack(cfg, (err, stats) => {
        if (err) return reject(err);
        if (stats.hasErrors()) {
          return reject(new Error(stats.toJson({ all: false, errors: true }).errors[0]?.message ?? 'build error'));
        }
        const ms = Date.now() - t;
        // `all: false` is required. Without it the unscoped payload costs ~3.6s
        // on the 10k case and exhausts an 8 GB heap on the 50k case.
        const chunks = stats.toJson({ all: false, chunks: true }).chunks.length;
        stats.compilation.compiler.close?.(() => {});
        console.log(JSON.stringify({ ms, chunks }));
        resolve();
      });
    });
  } else if (tool === 'vite') {
    const { build } = await import('vite');
    const cfg = await loadConfig('vite.config.mjs');
    const outDir = cfg.build?.outDir ? path.resolve(dir, cfg.build.outDir) : path.join(dir, 'dist-vite');
    rmSync(outDir, { recursive: true, force: true });
    const t = Date.now();
    const res = await build({ ...cfg, logLevel: 'error' });
    const ms = Date.now() - t;
    const out = (Array.isArray(res) ? res[0] : res).output;
    console.log(JSON.stringify({ ms, chunks: out.filter((o) => o.type === 'chunk').length }));
  } else {
    console.error(`unknown tool: ${tool}`);
    process.exit(2);
  }
} catch (err) {
  console.error(err?.message ?? String(err));
  process.exit(1);
}

process.exit(0);
