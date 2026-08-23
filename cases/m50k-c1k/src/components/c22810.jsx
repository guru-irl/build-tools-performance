import React from 'react';
const LABEL_22810 = 'component_22810';
export function Component22810({ value = 22810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22810, 'data-value': derived.doubled }, children);
}
export default Component22810;
