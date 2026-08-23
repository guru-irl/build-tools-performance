/**
 * Shared work core for the synthetic loader/transform taxonomy.
 *
 * PURPOSE. Chunk count and module count are already dials in this benchmark,
 * but together they explain only a fraction of what a large real application
 * spends in a production build. The unmodelled remainder is per-module work:
 * the loader/transform chain every module passes through. Copying some real
 * application's loader list would not be reusable knowledge -- it would only
 * describe that one app. So this models loader BEHAVIOUR CATEGORIES, and the
 * result is a general answer to "which kinds of loader cost what, and how does
 * each scale with module count".
 *
 * Categories, each isolating one mechanism:
 *
 *   noop             Cross the bundler's JS boundary and return the source
 *                    untouched. For a Rust-core bundler this is the pure
 *                    marshalling tax: the price of handing every module to
 *                    JavaScript and back having done nothing useful.
 *   cpu:<n>          Busy integer work, no parsing. Models loaders doing work
 *                    proportional to module size without understanding syntax.
 *   regex            Scan and rewrite source with regular expressions. Very
 *                    common in real loaders (banner injection, import
 *                    rewriting, dead-code stripping).
 *   parse-native     Parse to a real AST using the bundler's own native
 *                    parser, then discard it.
 *   parse-js         Same, using a JavaScript parser.
 *   transform-native Parse AND regenerate code with a native transformer.
 *   transform-js     Parse AND regenerate code with a JavaScript transformer.
 *   async:<ms>       Yield to the event loop, doing no CPU work. Models
 *                    I/O-bound loaders and exposes whether the bundler
 *                    pipelines them or serialises them.
 *   emit:<n>         Produce <n> extra emitted assets per module. Models CSS
 *                    or asset extraction, which grows the asset graph rather
 *                    than burning CPU.
 *
 * The native/JS split is the point of the taxonomy rather than an
 * implementation detail: "we run a transform per module" and "we run a
 * JavaScript transform per module" are very different claims about build cost,
 * and only measurement can say by how much.
 *
 * A separate `passes` dial applies the chosen category N times per module,
 * modelling chains where the same expensive work runs more than once.
 *
 * The work must be IDENTICAL across bundlers for a cross-tool comparison to
 * mean anything, which is why it lives here rather than in either adapter.
 * Only `emit` needs help from the host, since only the host can emit assets.
 *
 * Parsers are imported lazily, so a category is only a hard dependency when it
 * is actually selected; the JS parser/generator are optional extras and a
 * clear error names them if a run asks for a category they are needed for.
 */

/** Parses a spec like "cpu:20000" into { kind, arg }. */
export function parseSpec(spec) {
  if (!spec) return null;
  const [kind, rawArg] = String(spec).split(':');
  const arg = rawArg === undefined ? null : Number(rawArg);
  if (rawArg !== undefined && !Number.isFinite(arg)) {
    throw new Error(`invalid loader spec argument in "${spec}"`);
  }
  return { kind, arg };
}

/** Reads the spec + pass count from the environment. */
export function specFromEnv(env = process.env) {
  const spec = parseSpec(env.BENCH_LOADER);
  if (!spec) return null;
  const passes = Number(env.BENCH_LOADER_PASSES || 1);
  return { ...spec, passes: Number.isFinite(passes) && passes > 0 ? passes : 1 };
}

export const CATEGORIES = [
  'noop',
  'cpu',
  'regex',
  'parse-native',
  'parse-js',
  'transform-native',
  'transform-js',
  'async',
  'emit',
];

/**
 * Deterministic CPU burn. Uses an integer mix rather than a timed spin: a
 * wall-clock spin would make the benchmark's own result depend on how fast the
 * machine is, which is precisely the variable being measured.
 */
function burn(iterations) {
  let h = 0x811c9dc5;
  for (let i = 0; i < iterations; i++) {
    h ^= i;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let _tools = null;
async function tools() {
  if (_tools) return _tools;
  const vite = await import('vite');
  _tools = { vite };
  return _tools;
}

async function jsParser() {
  try {
    return await import('acorn');
  } catch {
    throw new Error("category 'parse-js' needs the optional package `acorn` (see docs/loader-taxonomy.md)");
  }
}

async function jsTransformer() {
  try {
    const parser = await import('@babel/parser');
    const generatorMod = await import('@babel/generator');
    // @babel/generator's callable lives at different depths across versions
    // and module systems; resolve it once here rather than at every call.
    const generate = generatorMod.default?.default ?? generatorMod.default ?? generatorMod.generate;
    if (typeof generate !== 'function') throw new Error('no callable generator');
    return { parser, generate };
  } catch (err) {
    throw new Error(
      "category 'transform-js' needs the optional packages `@babel/parser` and `@babel/generator` " +
        `(see docs/loader-taxonomy.md) -- ${err.message}`
    );
  }
}

/**
 * Applies one pass of the configured work to `source`.
 * `host` supplies { emit(index, content) } for the emit category.
 * `passIndex` is the 0-based pass number, used to keep emitted asset names
 * unique across passes.
 */
export async function applyOnce(source, spec, host = {}, passIndex = 0) {
  switch (spec.kind) {
    case 'noop':
      return source;

    case 'cpu': {
      // Folded into a comment so no layer below can drop it as dead code.
      const h = burn(spec.arg ?? 10000);
      return `${source}\n/*${h}*/`;
    }

    case 'regex': {
      const imports = (source.match(/\bimport\s+[^;]+;/g) || []).length;
      const rewritten = source.replace(/\bconst\s+(\w+)\s*=/g, (m) => m).replace(/[ \t]+$/gm, '');
      return `${rewritten}\n/*i${imports}*/`;
    }

    case 'parse-native': {
      const { vite } = await tools();
      const ast = vite.parseAst(source);
      return `${source}\n/*n${ast?.body?.length ?? 0}*/`;
    }

    case 'parse-js': {
      const acorn = await jsParser();
      const ast = acorn.parse(source, { ecmaVersion: 'latest', sourceType: 'module' });
      return `${source}\n/*n${ast.body.length}*/`;
    }

    case 'transform-native': {
      const { vite } = await tools();
      const out = await vite.transformWithOxc(source, 'module.js');
      return out?.code ?? source;
    }

    case 'transform-js': {
      const { parser, generate } = await jsTransformer();
      const ast = parser.parse(source, { sourceType: 'module' });
      const out = generate(ast, {}, source);
      return out?.code ?? source;
    }

    case 'async':
      await sleep(spec.arg ?? 1);
      return source;

    case 'emit': {
      if (!host.emit) throw new Error('emit category requires a host emit callback');
      const n = spec.arg ?? 1;
      for (let i = 0; i < n; i++) {
        // Namespaced by pass: without this, every pass emits the same filename
        // and later passes silently overwrite earlier ones, so `passes` would
        // multiply the work but NOT the asset graph -- understating exactly
        // what this category exists to measure.
        await host.emit(passIndex * n + i, `/*${passIndex}:${i}*/`);
      }
      return source;
    }

    default:
      throw new Error(`unknown loader category: ${spec.kind} (known: ${CATEGORIES.join(', ')})`);
  }
}

/** Applies `spec.passes` passes of the configured work. */
export async function applyWork(source, spec, host = {}) {
  let out = source;
  for (let i = 0; i < (spec.passes ?? 1); i++) {
    out = await applyOnce(out, spec, host, i);
  }
  return out;
}
