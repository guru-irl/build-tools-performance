import React from 'react';
const LABEL_17029 = 'component_17029';
export function Component17029({ value = 17029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17029, 'data-value': derived.doubled }, children);
}
export default Component17029;
