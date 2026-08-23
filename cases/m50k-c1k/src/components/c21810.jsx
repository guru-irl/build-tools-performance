import React from 'react';
const LABEL_21810 = 'component_21810';
export function Component21810({ value = 21810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21810, 'data-value': derived.doubled }, children);
}
export default Component21810;
