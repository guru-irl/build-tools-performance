import React from 'react';
const LABEL_11029 = 'component_11029';
export function Component11029({ value = 11029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11029, 'data-value': derived.doubled }, children);
}
export default Component11029;
