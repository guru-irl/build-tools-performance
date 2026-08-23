import React from 'react';
const LABEL_16157 = 'component_16157';
export function Component16157({ value = 16157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16157, 'data-value': derived.doubled }, children);
}
export default Component16157;
