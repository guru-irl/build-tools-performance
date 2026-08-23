import React from 'react';
const LABEL_11810 = 'component_11810';
export function Component11810({ value = 11810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11810, 'data-value': derived.doubled }, children);
}
export default Component11810;
