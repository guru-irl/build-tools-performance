# Synthetic Chunk-Scaling Benchmark — Design

## Why

The existing cases in this repo (`react-1k`, `react-5k`, `react-10k`) scale
**module count** while holding **chunk count** roughly fixed at ~5 — four
`React.lazy` routes plus the entry. They are excellent for measuring parse and
transform throughput, but they barely exercise the chunk-graph (seal) phase.

Large real applications do not grow that way. They accumulate hundreds of lazy
route boundaries and thousands of chunks, reaching module-per-chunk ratios
around 15 rather than 300. Nothing in the current matrix reproduces that shape,
so a bundler could scale badly in chunk count and the suite would not show it.

This case family adds a benchmark where **chunk count and module count are
independently dialable**, so the two effects can be separated.

## Verified mechanism

Measured against rspack 2.1.10 and Vite 8.2.1.

A splitChunks cache group with **no resolved `name`** emits one chunk per
distinct *clique* — the distinct set of consuming chunks. So if each synthetic
vendor package is imported by a distinct subset of routes, the bundler emits
one chunk per vendor package:

```
chunks  = D + R + 1          D = distinct cliques, R = routes
modules = D×k + A + R + 1    k = modules per vendor pkg, A = app modules
```

**Confirmed with a control.** 40 vendor packages sharing only 31 distinct route
subsets produced exactly 31 vendor chunks — the 10 packages with an identical
subset merged into one. Chunk count follows sharing topology, not package count.

**Confirmed linear**, 5/5 exact over a 16× range:

| cliques | routes | predicted | observed |
|---|---|---|---|
| 31  | 14 | 46  | 46  |
| 63  | 14 | 78  | 78  |
| 127 | 14 | 142 | 142 |
| 255 | 14 | 270 | 270 |
| 511 | 14 | 526 | 526 |

**Confirmed orthogonal.** Holding cliques at 127 and growing `k` from 1 to 48
grew modules 151 → 6,247 while chunk count stayed pinned at exactly 142.

**Orthogonality is a claim about _source_ modules.** The count a bundler
reports is not the same quantity. Measured on rspack with modules pinned at
1,000 and chunks dialed 40 → 240: on-disk source modules stayed at exactly
1,000, while rspack-reported modules drifted 1,050 → 1,250 (+19%). The delta
is `totalChunks + 10` — roughly 11 modules of framework and bundler runtime,
plus one `ConcatenatedModule` wrapper per chunk. Those wrappers scale with the
chunk dial by construction.

An earlier draft attributed the delta to "a constant framework runtime"; that
was wrong, and measuring it across 8 shapes disproved it. The generator's
module axis is therefore defined and asserted on source modules, counted from
rspack's own `nameForCondition` field deduplicated by path — which matches the
predicted total exactly at every shape tested.

## Findings that motivated specific design choices

### rspack ignores the splitChunks request ceilings

`maxInitialRequests` / `maxAsyncRequests` cap how many parallel requests one
route may cost; the splitter is supposed to stop splitting when exceeded.
Identical sources and config, ceiling 1 → ∞:

| ceiling | rspack 2.0.1 | rspack 2.1.10 | webpack 5.95.0 |
|---|---|---|---|
| 1   | 526 | 526 | 15  |
| 5   | 526 | 526 | 20  |
| 30  | 526 | 526 | 52  |
| inf | 526 | 526 | 526 |

A control in the same config confirms rspack honors `minChunks` (526→25) and
`minSize` (526→32), so the option is specifically not applied rather than the
config being ignored. Reproduces on the current release.

Consequence for this benchmark: the ceiling is a no-op on rspack, so nominal
chunk math holds exactly without raising it. It is retained as a regression
probe, not a tuning axis.

### Vite reaches comparable chunking with no configuration

Rollup/Rolldown groups modules by reachability signature — the set of entries
and dynamic-import boundaries that reach a module. That is natively the same
clique grouping this generator synthesizes.

On identical sources (511 cliques, 14 routes): **Vite 8.2.1 → 517 chunks with
zero chunk config**; rspack 2.1.10 → 526 chunks, but only with an explicit
nameless cache group.

The gap is not "Rolldown merges very small chunks" — that was an early guess,
and measuring it across 18 shapes disproved it. The relationship is exact and
deterministic:

```
vite = rspack - size1cliques + 1
size1cliques = min(floor(0.2 * cliques), routes)
```

A vendor reachable from exactly one route shares that route's reachability
signature, so Rolldown folds it into the route chunk. rspack's `minChunks: 1`
hoists it into its own chunk regardless. The difference is therefore exactly
the number of single-route vendors, which this generator controls directly
(20% of cliques by the size mix, capped by route count).

Because of that, the Vite/rspack chunk ratio is **not** a constant. Measured
across 18 shapes it drifts deterministically from **83.5% to 96%**, converging
toward an asymptote of 5/6 ≈ 83.3% as `routes` approaches `0.2 * cliques`.
An earlier draft of this document claimed the ratio holds at "≥ 90%"; that was
extrapolated from two shapes and is wrong. The committed test suite asserts a
floor of 0.78, chosen below the measured 83.35% floor rather than above it.

### Both scale linearly in chunk count

Modules held ~constant at ~4,000, cliques varied 16×:

| bundler | slope | R² |
|---|---|---|
| rspack 2.1.10 | +0.574 s / 1,000 chunks | 0.995 |
| Vite 8.2.1 | +0.238 s / 1,000 chunks | 0.976 |

Both linear; rspack pays ~2.4× more per chunk.

**Important caveat that shapes the case design:** those numbers come from a
microbenchmark with trivial module bodies and minification disabled. Bare
chunk-graph bookkeeping is cheap. Real per-chunk cost also includes codegen,
minification, hashing, source maps, and emit. **Minification is therefore
mandatory and module bodies non-trivial in every committed case** — with
trivial modules and no minifier, per-chunk cost is understated by roughly three
orders of magnitude, which would falsely suggest chunk count is nearly free.

## Case grid

`k` is fixed at 4 across every case so it is never a confound; only `A` varies
to reach the module target.

| Case | modules | chunks | R | D | vendor mods | app mods |
|---|---|---|---|---|---|---|
| `m10k-c1k`   | 10k  | 1k  | 100 | 899   | 3,596  | 6,303  |
| `m50k-c1k`   | 50k  | 1k  | 300 | 699   | 2,796  | 46,903 |
| `m50k-c5k`   | 50k  | 5k  | 300 | 4,699 | 18,796 | 30,903 |
| `m50k-c10k`  | 50k  | 10k | 300 | 9,699 | 38,796 | 10,903 |
| `m100k-c5k`  | 100k | 5k  | 300 | 4,699 | 18,796 | 80,903 |
| `m100k-c10k` | 100k | 10k | 300 | 9,699 | 38,796 | 60,903 |

- Rows 2–4: modules pinned at 50k, chunks 1k→10k ⇒ **pure chunk slope**
- Rows 1, 3, 5: chunks pinned at 5k, modules 10k→100k ⇒ **pure module slope**

App component modules are generated **route-private** (imported by exactly one
route), so they add modules without creating cliques. That is what keeps the
axes orthogonal.

Case sources are committed, matching this repo's existing convention. Measured
cost is ~365 B/file in `.git`.

## Scope

- **rspack and Vite.** Both are Rust-based (Vite 8 bundles with Rolldown), and
  both can express the chunking this benchmark measures. webpack is out of
  scope for the committed cases.
- **Build wall clock**, not shipped payload.
- Shape only — no attempt to reproduce any real application's source.

## Phasing

1. **Generator + mechanism proof** — generator, `case.params.json`, the two
   smallest cases, minify on, both configs. *(current)*
2. **Harness** — repeats, median-of-N, spread, hardware fingerprint, per-phase
   timings, peak memory, JSON output.
3. **Remaining cases** — the four larger cases, built once to record real wall
   clock.
4. **Lever matrix** — boundary tier (regex → resource fn → chunkGraph fn),
   named cache group count.
5. **Topology levers** — multi-compiler, prerequisite-compiler dependency edge,
   stats serialization.
