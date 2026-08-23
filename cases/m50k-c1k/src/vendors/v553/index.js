import compute0, { meta0 } from './i0.js';
import compute1, { meta1 } from './i1.js';
import compute2, { meta2 } from './i2.js';
const NAME = 'vendor_553';
export function vendor553(seed = 553) {
  const results = [compute0(seed), compute1(seed), compute2(seed)];
  const metas = [meta0, meta1, meta2];
  return { name: NAME, results, metas, checksum: results.reduce((a, r) => a + r.total, 0) };
}
export default vendor553;
