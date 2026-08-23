const PREFIX_1 = 'v417_i1';
export function compute1(input) {
  const parts = String(input).split('').map((c, i) => c.charCodeAt(0) + i);
  const total = parts.reduce((a, b) => a + b, 0);
  return { id: PREFIX_1, total, parts: parts.slice(0, 4) };
}
export const meta1 = { name: PREFIX_1, version: '1.0.1', pure: true };
export default compute1;
