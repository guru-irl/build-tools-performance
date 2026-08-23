import React from 'react';
const LABEL_33810 = 'component_33810';
export function Component33810({ value = 33810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33810, 'data-value': derived.doubled }, children);
}
export default Component33810;
