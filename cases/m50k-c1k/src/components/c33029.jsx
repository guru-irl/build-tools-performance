import React from 'react';
const LABEL_33029 = 'component_33029';
export function Component33029({ value = 33029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33029, 'data-value': derived.doubled }, children);
}
export default Component33029;
