import React from 'react';
const LABEL_6810 = 'component_6810';
export function Component6810({ value = 6810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6810, 'data-value': derived.doubled }, children);
}
export default Component6810;
