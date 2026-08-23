import React from 'react';
const LABEL_36810 = 'component_36810';
export function Component36810({ value = 36810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36810, 'data-value': derived.doubled }, children);
}
export default Component36810;
