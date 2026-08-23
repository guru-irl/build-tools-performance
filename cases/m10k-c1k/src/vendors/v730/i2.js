const PREFIX_2 = 'v730_i2';
export function compute2(input) {
  const parts = String(input).split('').map((c, i) => c.charCodeAt(0) + i);
  const total = parts.reduce((a, b) => a + b, 0);
  return { id: PREFIX_2, total, parts: parts.slice(0, 4) };
}
export const meta2 = { name: PREFIX_2, version: '1.0.2', pure: true };
export default compute2;
