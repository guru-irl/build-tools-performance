import React from 'react';
const LABEL_28810 = 'component_28810';
export function Component28810({ value = 28810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28810, 'data-value': derived.doubled }, children);
}
export default Component28810;
