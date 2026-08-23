import React from 'react';
const LABEL_42810 = 'component_42810';
export function Component42810({ value = 42810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42810, 'data-value': derived.doubled }, children);
}
export default Component42810;
