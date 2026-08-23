import React from 'react';
const LABEL_10810 = 'component_10810';
export function Component10810({ value = 10810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10810, 'data-value': derived.doubled }, children);
}
export default Component10810;
