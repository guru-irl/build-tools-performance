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

## `BENCH_MINIFIER` — which minifier does the work

A bundler's built-in minifier is not the only option, and swapping it is a
common decision. `BENCH_MINIFIER` makes the choice explicit:

| value | behaviour |
|---|---|
| unset | the bundler's own default (currently SWC-based) |
| `swc` | the built-in, stated explicitly — byte-identical to unset |
| `oxc` | the standalone oxc minifier, run as a plugin at the same `processAssets` stage (400) a built-in minifier uses |

Selecting `oxc` turns the built-in **off**, so the two are measured doing the
same job at the same point rather than one running on top of the other.

Measured on ~7.5 MB of pre-minify JS, per byte of **input handed to the
minifier**, single chunk:

| shape | swc ms/MB | oxc ms/MB | swc shrink | oxc shrink |
|---|---|---|---|---|
| flat arithmetic | 87.7 | 30.4 | 54% | 32% |
| many identifiers | 38.3 | 16.4 | 90% | 82% |
| nested scopes | 59.8 | 17.6 | 96% | 75% |
| string tables | 6.4 | 3.3 | 100% | 5% |

**oxc is 2.9–3.4× faster on every shape but compresses substantially less.**
Neither half of that tradeoff is visible if the minifier is left implicit.

**Minifier cost per byte varies ~14× with the shape of the code.** String
tables are nearly free; flat arithmetic is the most expensive. This is the
companion result to `moduleBytes`: byte count sets the scale, code shape sets
the rate.

### Two ways to get this comparison wrong

**Denominator.** Cost per *post-minify* byte flatters whichever minifier
compresses least; cost per *dist* byte flatters whichever emits less
source-map data. Every figure above is per byte of input. Getting this wrong
is not a rounding error — it inflated an earlier version of these numbers by
roughly 7×.

**Asset count.** The oxc lever is a JavaScript plugin, so it pays the per-asset
boundary cost documented above. At one chunk oxc wins by 3×; in a
2,500-chunk case it measured 26.0 ms/MB against the built-in's 11.8 — the
ordering **reverses**. A minifier cannot be evaluated independently of how many
assets it is handed.

## Configuring a case to resemble a large application

The dials are independent, so they can be set to match a measured target:

```
moduleBytes: 7000            # match the target's bytes per module
BENCH_LOADER=transform-native # model a per-module TS/JSX transform
BENCH_MINIFIER=oxc            # match the target's minifier
BENCH_SOURCEMAP=1             # maps are usually on in production
```

Measured against one large application, with module size controlled at ~7 KB
per module on both sides:

| configuration | make ms/module | minify ms/input MB |
|---|---|---|
| defaults | 0.024 | 11.8 |
| + oxc | 0.023 | 26.0 |
| + oxc + transform loader | 0.132 | 27.5 |
| the application | 0.488 | 65.3 |

The transform loader is what moves `make` — 5.5× on its own — because the
default case runs **no loader at all**, while a real application transforms
every module. The residual gap is roughly 3.7× on `make` and 2.5× on `minify`,
and is not yet explained; deeper module resolution and multiple loaders per
module are the leading candidates.
