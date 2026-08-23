import React from 'react';
const LABEL_21029 = 'component_21029';
export function Component21029({ value = 21029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21029, 'data-value': derived.doubled }, children);
}
export default Component21029;
