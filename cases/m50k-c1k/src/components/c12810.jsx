import React from 'react';
const LABEL_12810 = 'component_12810';
export function Component12810({ value = 12810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12810, 'data-value': derived.doubled }, children);
}
export default Component12810;
