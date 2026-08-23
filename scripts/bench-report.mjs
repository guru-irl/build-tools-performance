/**
 * Analysis + charts for the synthetic chunk-scaling benchmark.
 *
 * Charts are emitted as hand-written SVG using only the standard library, then
 * optionally rasterised with macOS `qlmanage`. No plotting dependency exists in
 * this repo and none is added.
 *
 * `qlmanage` renders into a SQUARE canvas and crops overflow, so the canvas is
 * square and the legend sits BELOW the plot area rather than beside it.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { linfit } from './bench.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RESULTS = path.join(ROOT, 'docs', 'results');
const data = JSON.parse(readFileSync(path.join(RESULTS, 'bench.json'), 'utf8'));
const rows = data.results.filter((r) => r.tool && !r.error);

const W = 1200;
const H = 1200;
const L = 130;
const R = 70;
const T = 110;
const B = 320;
const PW = W - L - R;
const PH = H - T - B;
const INK = '#1a1a1a';
const GRID = '#e3e3e3';
const COLOR = { rspack: '#c0392b', vite: '#2c6fbb' };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function chart({ file, title, sub, xlabel, series, xs }) {
  const allX = xs;
  const allY = series.flatMap((s) => s.points.map((p) => p.y));
  const xmin = 0;
  const xmax = Math.max(...allX) * 1.05;
  const ymin = 0;
  const ymax = Math.max(...allY) * 1.15;
  const px = (x) => L + ((x - xmin) / (xmax - xmin)) * PW;
  const py = (y) => T + PH - ((y - ymin) / (ymax - ymin)) * PH;

  const o = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`,
    `<rect width="${W}" height="${H}" fill="#ffffff"/>`,
    `<text x="${L}" y="52" font-family="Helvetica,Arial" font-size="30" font-weight="600" fill="${INK}">${esc(title)}</text>`,
    `<text x="${L}" y="82" font-family="Helvetica,Arial" font-size="17" fill="#666">${esc(sub)}</text>`,
  ];

  for (let i = 0; i <= 5; i++) {
    const y = T + (PH * i) / 5;
    const v = ymax - ((ymax - ymin) * i) / 5;
    o.push(`<line x1="${L}" y1="${y}" x2="${L + PW}" y2="${y}" stroke="${GRID}" stroke-width="1"/>`);
    o.push(
      `<text x="${L - 14}" y="${y + 5}" text-anchor="end" font-family="Helvetica,Arial" font-size="15" fill="#555">${(v / 1000).toFixed(1)}s</text>`
    );
  }
  o.push(`<line x1="${L}" y1="${T + PH}" x2="${L + PW}" y2="${T + PH}" stroke="${INK}" stroke-width="1.5"/>`);
  o.push(`<line x1="${L}" y1="${T}" x2="${L}" y2="${T + PH}" stroke="${INK}" stroke-width="1.5"/>`);

  for (const x of allX) {
    o.push(
      `<text x="${px(x)}" y="${T + PH + 28}" text-anchor="middle" font-family="Helvetica,Arial" font-size="15" fill="#555">${x >= 1000 ? x / 1000 + 'k' : x}</text>`
    );
  }
  o.push(
    `<text x="${L + PW / 2}" y="${T + PH + 62}" text-anchor="middle" font-family="Helvetica,Arial" font-size="17" fill="${INK}">${esc(xlabel)}</text>`
  );
  o.push(
    `<text x="34" y="${T + PH / 2}" text-anchor="middle" font-family="Helvetica,Arial" font-size="17" fill="${INK}" transform="rotate(-90 34 ${T + PH / 2})">median build time</text>`
  );

  for (const s of series) {
    const pts = [...s.points].sort((a, b) => a.x - b.x);
    o.push(
      `<polyline fill="none" stroke="${s.color}" stroke-width="3" stroke-dasharray="${s.dash ? '7,5' : 'none'}" points="${pts.map((p) => `${px(p.x)},${py(p.y)}`).join(' ')}"/>`
    );
    for (const p of pts) {
      o.push(`<circle cx="${px(p.x)}" cy="${py(p.y)}" r="6" fill="${s.color}"/>`);
      if (p.lo != null && p.hi != null && p.hi > p.lo) {
        o.push(`<line x1="${px(p.x)}" y1="${py(p.lo)}" x2="${px(p.x)}" y2="${py(p.hi)}" stroke="${s.color}" stroke-width="2"/>`);
      }
    }
  }

  let ly = T + PH + 110;
  for (const s of series) {
    o.push(`<line x1="${L}" y1="${ly - 5}" x2="${L + 46}" y2="${ly - 5}" stroke="${s.color}" stroke-width="3" stroke-dasharray="${s.dash ? '7,5' : 'none'}"/>`);
    o.push(`<circle cx="${L + 23}" cy="${ly - 5}" r="6" fill="${s.color}"/>`);
    o.push(`<text x="${L + 62}" y="${ly}" font-family="Helvetica,Arial" font-size="17" fill="${INK}">${esc(s.label)}</text>`);
    ly += 32;
  }
  o.push('</svg>');

  const svgPath = path.join(RESULTS, `${file}.svg`);
  writeFileSync(svgPath, o.join('\n') + '\n');
  try {
    execFileSync('qlmanage', ['-t', '-s', String(W), '-o', RESULTS, svgPath], { stdio: 'ignore' });
    execFileSync('mv', ['-f', `${svgPath}.png`, path.join(RESULTS, `${file}.png`)], { stdio: 'ignore' });
  } catch {
    /* rasterisation is optional; the SVG is the artifact of record */
  }
  console.log(`  wrote docs/results/${file}.svg`);
}

const pick = (tool, filter) => rows.filter((r) => r.tool === tool && filter(r));
const pt = (r, xkey) => ({ x: r[xkey], y: r.medianMs, lo: r.minMs, hi: r.maxMs });

// ---------------------------------------------------------------- chunk axis
const chunkRows = (tool) => pick(tool, (r) => r.targetModules === 50000).sort((a, b) => a.targetChunks - b.targetChunks);
console.log('\nCHUNK AXIS  (modules fixed at 50,000; chunks dialed 1k -> 10k)');
const chunkSeries = [];
for (const tool of ['rspack', 'vite']) {
  const rs = chunkRows(tool);
  if (rs.length < 2) continue;
  const f = linfit(rs.map((r) => r.chunks), rs.map((r) => r.medianMs));
  console.log(
    `  ${tool.padEnd(7)} +${(f.slope * 1000).toFixed(0)} ms / 1000 chunks   R2=${f.r2.toFixed(3)}  n=${f.n}  intercept ${(f.intercept / 1000).toFixed(2)}s`
  );
  const segs = rs.slice(1).map((r, i) => ((r.medianMs - rs[i].medianMs) / (r.chunks - rs[i].chunks)) * 1000);
  console.log(`          segment slopes (ms/1000 chunks): ${segs.map((s) => s.toFixed(0)).join(' -> ')}`);
  chunkSeries.push({ label: `${tool}  (+${(f.slope * 1000).toFixed(0)} ms / 1000 chunks, R²=${f.r2.toFixed(3)})`, color: COLOR[tool], points: rs.map((r) => pt(r, 'chunks')) });
}
chart({
  file: 'chunk-axis',
  title: 'Build time vs chunk count',
  sub: `modules fixed at 50,000 · median of 3 runs · ${data.env.cpuModel}, ${data.env.physicalCores ?? data.env.logicalCores} cores · rspack ${data.env.rspack} / vite ${data.env.vite}`,
  xlabel: 'chunks emitted',
  series: chunkSeries,
  xs: [1000, 5000, 10000],
});

// --------------------------------------------------------------- module axis
console.log('\nMODULE AXIS  (chunks fixed; modules dialed)');
const moduleSeries = [];
for (const tc of [5000, 10000]) {
  for (const tool of ['rspack', 'vite']) {
    const rs = pick(tool, (r) => r.targetChunks === tc).sort((a, b) => a.targetModules - b.targetModules);
    if (rs.length < 2) continue;
    const f = linfit(rs.map((r) => r.targetModules), rs.map((r) => r.medianMs));
    console.log(`  ${tool.padEnd(7)} @${tc / 1000}k chunks  +${(f.slope * 1000).toFixed(1)} ms / 1000 modules  R2=${f.r2.toFixed(3)}  n=${f.n}`);
    moduleSeries.push({
      label: `${tool} @ ${tc / 1000}k chunks  (+${(f.slope * 1000).toFixed(1)} ms / 1000 modules, R²=${f.r2.toFixed(3)})`,
      color: COLOR[tool],
      dash: tc === 10000,
      points: rs.map((r) => pt(r, 'targetModules')),
    });
  }
}
chart({
  file: 'module-axis',
  title: 'Build time vs module count',
  sub: `chunk count held fixed · median of 3 runs · ${data.env.cpuModel}, ${data.env.physicalCores ?? data.env.logicalCores} cores · rspack ${data.env.rspack} / vite ${data.env.vite}`,
  xlabel: 'source modules',
  series: moduleSeries,
  xs: [25000, 50000, 75000, 100000],
});

// ------------------------------------------------------------- cross-tool
console.log('\nCROSS-TOOL  (rspack / vite median on identical sources)');
const cases = [...new Set(rows.map((r) => r.case))];
for (const c of cases) {
  const a = rows.find((r) => r.case === c && r.tool === 'rspack');
  const b = rows.find((r) => r.case === c && r.tool === 'vite');
  if (a && b) {
    console.log(
      `  ${c.padEnd(11)} rspack ${String(a.medianMs).padStart(5)}ms  vite ${String(b.medianMs).padStart(5)}ms  ratio ${(a.medianMs / b.medianMs).toFixed(2)}x  chunks ${a.chunks}/${b.chunks}`
    );
  }
}
