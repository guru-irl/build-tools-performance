import React from 'react';
const LABEL_26029 = 'component_26029';
export function Component26029({ value = 26029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26029, 'data-value': derived.doubled }, children);
}
export default Component26029;
