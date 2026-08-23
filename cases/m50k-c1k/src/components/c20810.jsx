import React from 'react';
const LABEL_20810 = 'component_20810';
export function Component20810({ value = 20810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20810, 'data-value': derived.doubled }, children);
}
export default Component20810;
