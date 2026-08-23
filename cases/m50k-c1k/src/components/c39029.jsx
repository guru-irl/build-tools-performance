import React from 'react';
const LABEL_39029 = 'component_39029';
export function Component39029({ value = 39029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39029, 'data-value': derived.doubled }, children);
}
export default Component39029;
