// Route registry: maps a numeric route id to a loader that dynamically
// imports that route's module, so the bundler still splits one chunk per
// route while this entry does real dispatch work instead of being a bare
// list of import() statements.
const ROUTES = {
  0: () => import('./routes/r0.jsx'),
  1: () => import('./routes/r1.jsx'),
  2: () => import('./routes/r2.jsx'),
  3: () => import('./routes/r3.jsx'),
  4: () => import('./routes/r4.jsx'),
  5: () => import('./routes/r5.jsx'),
  6: () => import('./routes/r6.jsx'),
  7: () => import('./routes/r7.jsx'),
  8: () => import('./routes/r8.jsx'),
  9: () => import('./routes/r9.jsx'),
  10: () => import('./routes/r10.jsx'),
  11: () => import('./routes/r11.jsx'),
  12: () => import('./routes/r12.jsx'),
  13: () => import('./routes/r13.jsx'),
  14: () => import('./routes/r14.jsx'),
  15: () => import('./routes/r15.jsx'),
  16: () => import('./routes/r16.jsx'),
  17: () => import('./routes/r17.jsx'),
  18: () => import('./routes/r18.jsx'),
  19: () => import('./routes/r19.jsx'),
  20: () => import('./routes/r20.jsx'),
  21: () => import('./routes/r21.jsx'),
  22: () => import('./routes/r22.jsx'),
  23: () => import('./routes/r23.jsx'),
  24: () => import('./routes/r24.jsx'),
  25: () => import('./routes/r25.jsx'),
  26: () => import('./routes/r26.jsx'),
  27: () => import('./routes/r27.jsx'),
  28: () => import('./routes/r28.jsx'),
  29: () => import('./routes/r29.jsx'),
  30: () => import('./routes/r30.jsx'),
  31: () => import('./routes/r31.jsx'),
  32: () => import('./routes/r32.jsx'),
  33: () => import('./routes/r33.jsx'),
  34: () => import('./routes/r34.jsx'),
  35: () => import('./routes/r35.jsx'),
  36: () => import('./routes/r36.jsx'),
  37: () => import('./routes/r37.jsx'),
  38: () => import('./routes/r38.jsx'),
  39: () => import('./routes/r39.jsx'),
  40: () => import('./routes/r40.jsx'),
  41: () => import('./routes/r41.jsx'),
  42: () => import('./routes/r42.jsx'),
  43: () => import('./routes/r43.jsx'),
  44: () => import('./routes/r44.jsx'),
  45: () => import('./routes/r45.jsx'),
  46: () => import('./routes/r46.jsx'),
  47: () => import('./routes/r47.jsx'),
  48: () => import('./routes/r48.jsx'),
  49: () => import('./routes/r49.jsx'),
  50: () => import('./routes/r50.jsx'),
  51: () => import('./routes/r51.jsx'),
  52: () => import('./routes/r52.jsx'),
  53: () => import('./routes/r53.jsx'),
  54: () => import('./routes/r54.jsx'),
  55: () => import('./routes/r55.jsx'),
  56: () => import('./routes/r56.jsx'),
  57: () => import('./routes/r57.jsx'),
  58: () => import('./routes/r58.jsx'),
  59: () => import('./routes/r59.jsx'),
  60: () => import('./routes/r60.jsx'),
  61: () => import('./routes/r61.jsx'),
  62: () => import('./routes/r62.jsx'),
  63: () => import('./routes/r63.jsx'),
  64: () => import('./routes/r64.jsx'),
  65: () => import('./routes/r65.jsx'),
  66: () => import('./routes/r66.jsx'),
  67: () => import('./routes/r67.jsx'),
  68: () => import('./routes/r68.jsx'),
  69: () => import('./routes/r69.jsx'),
  70: () => import('./routes/r70.jsx'),
  71: () => import('./routes/r71.jsx'),
  72: () => import('./routes/r72.jsx'),
  73: () => import('./routes/r73.jsx'),
  74: () => import('./routes/r74.jsx'),
  75: () => import('./routes/r75.jsx'),
  76: () => import('./routes/r76.jsx'),
  77: () => import('./routes/r77.jsx'),
  78: () => import('./routes/r78.jsx'),
  79: () => import('./routes/r79.jsx'),
  80: () => import('./routes/r80.jsx'),
  81: () => import('./routes/r81.jsx'),
  82: () => import('./routes/r82.jsx'),
  83: () => import('./routes/r83.jsx'),
  84: () => import('./routes/r84.jsx'),
  85: () => import('./routes/r85.jsx'),
  86: () => import('./routes/r86.jsx'),
  87: () => import('./routes/r87.jsx'),
  88: () => import('./routes/r88.jsx'),
  89: () => import('./routes/r89.jsx'),
  90: () => import('./routes/r90.jsx'),
  91: () => import('./routes/r91.jsx'),
  92: () => import('./routes/r92.jsx'),
  93: () => import('./routes/r93.jsx'),
  94: () => import('./routes/r94.jsx'),
  95: () => import('./routes/r95.jsx'),
  96: () => import('./routes/r96.jsx'),
  97: () => import('./routes/r97.jsx'),
  98: () => import('./routes/r98.jsx'),
  99: () => import('./routes/r99.jsx'),
};

export function resolveRoute(id) {
  const loader = ROUTES[id];
  if (typeof loader !== 'function') {
    throw new RangeError(`unknown route id: ${id}`);
  }
  return loader();
}

export function dispatch(path) {
  const ids = Object.keys(ROUTES).map(Number);
  const n = ids.length;
  const parsed = Number.parseInt(String(path).replace(/^\//, ''), 10);
  const safe = Number.isInteger(parsed) ? ((parsed % n) + n) % n : 0;
  return resolveRoute(ids[safe]);
}

export default function mount(root) {
  const ids = Object.keys(ROUTES).map(Number).sort((a, b) => a - b);
  const checksum = ids.reduce((acc, id) => acc + id, 0);
  return { root, count: ids.length, checksum, dispatch };
}

// Actually run the entry -- see the comment on entryBody() above for why this
// call (not just the definitions above it) is required for a real Vite build
// to keep the route registry instead of tree-shaking it away.
mount('root');
