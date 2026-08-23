import React from 'react';
const LABEL_15810 = 'component_15810';
export function Component15810({ value = 15810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15810, 'data-value': derived.doubled }, children);
}
export default Component15810;
