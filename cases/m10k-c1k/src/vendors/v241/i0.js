const PREFIX_0 = 'v241_i0';
export function compute0(input) {
  const parts = String(input).split('').map((c, i) => c.charCodeAt(0) + i);
  const total = parts.reduce((a, b) => a + b, 0);
  return { id: PREFIX_0, total, parts: parts.slice(0, 4) };
}
export const meta0 = { name: PREFIX_0, version: '1.0.0', pure: true };
export default compute0;
