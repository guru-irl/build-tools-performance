import React from 'react';
const LABEL_16810 = 'component_16810';
export function Component16810({ value = 16810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16810, 'data-value': derived.doubled }, children);
}
export default Component16810;
