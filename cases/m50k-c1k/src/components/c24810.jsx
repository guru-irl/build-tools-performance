import React from 'react';
const LABEL_24810 = 'component_24810';
export function Component24810({ value = 24810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24810, 'data-value': derived.doubled }, children);
}
export default Component24810;
