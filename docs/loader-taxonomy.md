# Loader taxonomy: what per-module work actually costs

Module count and chunk count are both dials in this benchmark, and
[docs/results/README.md](results/README.md) shows how build time responds to
each. But those two dials do not explain the production build times reported
for large real applications: a synthetic case with 100,000 modules and 10,000
chunks builds in single-digit seconds, while real applications of comparable
graph size routinely take minutes. The unmodelled remainder is **per-module
work** — the loader/transform chain each module passes through.

Copying some specific application's loader list would not produce reusable
knowledge; it would only describe that one application. So this benchmark
models loader **behaviour categories** instead, and answers a general question:
*which kinds of per-module work cost what, and how does each scale?*

## Categories

Selected with `BENCH_LOADER=<category>`, applied `BENCH_LOADER_PASSES=<n>`
times per module. Implemented once in `scripts/loader-core.mjs` and shared by
both the rspack loader (`scripts/synthetic-loader.mjs`) and the Vite plugin, so
the two tools execute byte-identical work and any difference between them is a
property of the bundler rather than of two separate implementations.

| category | what it models |
|---|---|
| `noop` | Cross into JS and return the source untouched — the pure boundary tax |
| `cpu:<n>` | Integer work proportional to `n`, no parsing |
| `regex` | Regex scan + rewrite (banner injection, import rewriting) |
| `parse-native` | Parse to a real AST with the native parser, discard it |
| `parse-js` | Same, with a JavaScript parser |
| `transform-native` | Parse **and** regenerate code with a native transformer |
| `transform-js` | Parse **and** regenerate code with a JavaScript transformer |
| `async:<ms>` | Yield to the event loop; models I/O-bound loaders |
| `emit:<n>` | Emit `n` extra assets per module; models CSS/asset extraction |

`parse-js` and `transform-js` need the optional packages `acorn` and
`@babel/parser` + `@babel/generator`. If absent, those categories fail with a
message naming them; every other category works with no extra dependencies.

**When `BENCH_LOADER` is unset, no loader rule and no plugin is registered at
all** — not a rule that returns its input. That distinction is the whole point
of the `noop` category: a JS loader that does nothing still costs a boundary
crossing per module.

## Results

`m10k-c1k` (10,000 modules, 1,000 chunks), median of 3 runs after a discarded
warmup, marginal cost measured against a build with **no loader rule at all**.
Raw data: [docs/results/loaders.json](results/loaders.json) / `.csv`, including
the load average at capture time.

| category | rspack µs/module | rspack overhead | Vite µs/module | Vite overhead |
|---|---|---|---|---|
| `noop` | **19.7** | **+36.3%** | **4.0** | **+8.3%** |
| `cpu:1000` | 22.4 | +41.3% | 8.6 | +17.9% |
| `regex` | 22.9 | +42.2% | 11.2 | +23.3% |
| `cpu:10000` | 30.1 | +55.4% | 34.8 | +72.5% |
| `parse-js` | 45.4 | +83.6% | 49.6 | +103.3% |
| `transform-native` | 51.2 | +94.3% | 59.9 | +124.8% |
| `parse-native` | 55.8 | +102.8% | 65.2 | +135.8% |
| `transform-js` | 58.2 | +107.2% | 64.5 | +134.4% |
| `emit:1` | **92.0** | **+169.4%** | **82.0** | **+170.8%** |

### The boundary tax is real, and asymmetric

A loader that does *nothing* costs rspack **36% of its total build time** and
Vite **8%** — roughly a 5× difference in the price of handing each module to
JavaScript and back. For a Rust-core bundler, adding any JS loader to the chain
is not free even when the loader itself is trivial; the crossing dominates
until the loader does real work.

### Native is not automatically cheaper than JS

The obvious hypothesis — native parsers and transformers beat JavaScript ones —
does not survive measurement. `parse-native` (55.8 µs) is **more expensive**
than `parse-js` (45.4 µs), while `transform-native` (51.2 µs) **is** cheaper
than `transform-js` (58.2 µs).

The pairing explains it. `parse-native` returns an entire AST, which must be
marshalled across the boundary into JavaScript objects; `transform-native`
returns only a string. **What governs cost is how much data crosses the
boundary, not which language did the work.** A native parser whose output has
to be materialised in JS can lose to a JS parser that produces its result
in-process.

The practical consequence: "we replaced our JS transform with a native one" is
not by itself a performance claim. It depends entirely on what the native tool
hands back.

### Emitting assets is the most expensive category measured

`emit:1` — one extra emitted asset per module, doing no CPU work and no
parsing — costs more than any parse or transform, on **both** bundlers
(+169% / +171%). Growing the asset graph is more expensive per module than
analysing the module's contents. Loaders that extract CSS or side-car files
per module should be costed accordingly, and are a better optimisation target
than they usually receive.

## Measurement caveats

- Build machines are noisy. The harness records `loadavg` in every result file
  precisely so a reader can tell a quiet run from a contended one; treat any
  comparison across capture sessions with suspicion unless the load figures are
  similar.
- The marginal costs above are differences against a baseline, so their error
  is the sum of two measurement errors. Small categories (`noop`, `cpu:1000`)
  are the least robust and should be re-measured on an idle machine before
  being quoted precisely.
- `BENCH_LOADER_PASSES` scaling is **not** characterised here. It was attempted
  and the results were discarded: the machine developed heavy background load
  mid-measurement (the no-loader baseline drifted from 543 ms to 978 ms across
  consecutive runs), which makes any multi-pass conclusion meaningless. It
  needs a quiet machine.
