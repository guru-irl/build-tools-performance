import React from 'react';
const LABEL_2810 = 'component_2810';
export function Component2810({ value = 2810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2810, 'data-value': derived.doubled }, children);
}
export default Component2810;
