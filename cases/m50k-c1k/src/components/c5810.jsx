import React from 'react';
const LABEL_5810 = 'component_5810';
export function Component5810({ value = 5810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5810, 'data-value': derived.doubled }, children);
}
export default Component5810;
