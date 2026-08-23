# Module size and asset-stage dials

[docs/loader-taxonomy.md](loader-taxonomy.md) measured what per-module loader
work costs. That answered one question and raised a sharper one: loader dials
make a synthetic build slower, but they push time into `make`, whereas large
real applications spend most of their build in the **asset stage**. Making the
benchmark slower is easy; making it slow *in the same shape* is the useful
problem.

Two further dials close that gap.

## `moduleBytes` — module body size

`generateCase({ ..., moduleBytes: 8000 })` pads each generated leaf module and
app component with deterministic filler until it reaches roughly that many
source bytes. Default is `0`, which emits the original bodies unchanged, so
every previously published case regenerates byte-for-byte identically.

The filler is real code — helper functions doing arithmetic on a runtime
argument, reachable from the module's exported entry point. Three cheaper
implementations were rejected:

- **String blobs.** Inflate byte counts while giving the asset stage almost
  nothing to do; the dial would look effective and model nothing.
- **Constant expressions.** Folded by the minifier.
- **Unreferenced helpers.** Intended to be dropped by tree-shaking — but see
  below, because measurement contradicted that expectation.

### Dead code is not free

Making the filler unreachable (defined, never called) still grew emitted output
from **198 KB to 1,943 KB**, versus **2,570 KB** when reachable. rspack does
**not** drop unreferenced module-local function declarations; they survive
minification into the bundle.

This matters twice over. It is a genuine finding about output size — dead code
in a module that ships still costs bytes. And it invalidated an earlier version
of the test suite here: a test asserting only that "emitted bytes grow with
`moduleBytes`" passed even when the filler was never called, because the dead
filler was retained anyway. Reachability is now asserted structurally, against
the generated source, rather than inferred from output size.

## `BENCH_PLUGIN` — asset-stage work

Per-asset work registered at the `processAssets` stage matching the cost shape
being modelled, so the synthetic plugin sits where the real ones sit.

| category | stage | models |
|---|---|---|
| `asset-scan` | SUMMARIZE (1000) | plugins that only inspect output |
| `asset-rewrite` | SUMMARIZE (1000) | walk every bundle and patch a marker |
| `asset-transform` | OPTIMIZE_SIZE (400) | minifier-shaped, work per emitted byte |
| `asset-summarize` | REPORT (5000) | whole-graph manifest/report plugins |

As with the loader dial, when `BENCH_PLUGIN` is unset **no plugin is registered
at all**, because an inert tap is itself measurable at this asset count.

### Per-asset cost is boundary cost, not work

Measured on a 75,000-module case emitting 10,000 assets (~300 MB), against a
10.6 s no-plugin baseline:

| category | processAssets | delta |
|---|---|---|
| (no plugin) | 10.6 s | — |
| `asset-rewrite` (read + write) | 16.1 s | +5.5 s |
| `asset-summarize` (read only) | 16.8 s | +6.2 s |
| `asset-scan` (read only) | 18.2 s | +7.6 s |

All three cost about the same, and `asset-rewrite` — the only one that writes
assets back — is not more expensive than the read-only categories. The spread
between them is run-to-run noise.

**The cost is materialising every asset across the JS boundary, not the work
done once it is there.** Isolated separately: the regex work inside
`asset-rewrite` takes 0–1 ms for 200 assets, so essentially none of the +5.5 s
is the rewriting. This is why `asset-rewrite`'s numeric argument barely moves
the result, and it is worth knowing before optimising any per-asset plugin: the
win is in touching fewer assets, not in doing less per asset.

## Effect on realism

Phase distribution of a 75,000-module / 5,000-chunk case, source maps on:

| phase | default | `moduleBytes=8000` | + `regex` loader + `asset-rewrite` |
|---|---|---|---|
| make | 42.0% | 14.6% | 20.3% |
| optimize tree | 21.8% | 6.7% | 4.6% |
| **processAssets** | **5.7%** | **63.4%** | **63.4%** |
| emit | 10.8% | 6.0% | 2.7% |
| total | 5.2 s | 16.7 s | 44.0 s |

The size dial is what moves the needle: on its own it takes the asset stage
from 5.7% of the build to 63.4%, confirming that asset-stage cost scales with
**emitted bytes** rather than module count. Adding loader work then brings
`make` back up.

Known remaining gaps: `emit` is still under-modelled relative to large real
applications, and total build time is short of one by roughly a factor of
three. Both are open.

## `BENCH_CACHE_GROUPS` — splitChunks test evaluation

The third under-modelled phase was `optimize tree`. rspack does not expose
`optimizeChunks` as a JS hook, so chunk splitting is folded into that window,
which made it the natural suspect.

Every cacheGroup's `test` is evaluated against every module, so N groups on an
M-module graph is N×M evaluations before a single chunk is formed. Large
applications accumulate cacheGroups steadily — one per vendor to isolate, one
per route to split — and it is easy to reach three digits without anyone
deciding to.

`BENCH_CACHE_GROUPS=<n>` adds n groups whose tests **match nothing**, so chunk
count is unchanged and the only thing measured is the cost of asking.
`BENCH_CACHE_GROUP_TESTS` selects how the question is asked: `regex` (default),
which the bundler evaluates natively, or `function`, a JS predicate that must
cross into JavaScript once per module per group.

Measured on an 80,001-module / 5,000-chunk case:

| configuration | optimize tree | marginal |
|---|---|---|
| no extra groups | 1.3 s | — |
| 120 groups, `regex` tests | 5.0 s | +3.7 s |
| 120 groups, `function` tests | **17.5 s** | **+16.2 s** |

**A JS-function cacheGroup test costs about 4.4× a regex one.** Both ask the
same question and both answer "no" for every module; the difference is purely
that one answer is computed in JavaScript. At 120 groups over 80,000 modules
that is roughly 9.6 million evaluations, which is why a phase that does no
visible work can still take double-digit seconds.

Practical consequence: a cacheGroup written as a predicate function — often
reached for because it can consult the module graph — is not a like-for-like
replacement for a regex. If a group can be expressed as a pattern, expressing
it as a function is a measurable tax paid on every module in the build.

This dial is rspack-only; Rolldown has no cacheGroups equivalent, so a
cross-tool comparison is not meaningful here and none is reported.
