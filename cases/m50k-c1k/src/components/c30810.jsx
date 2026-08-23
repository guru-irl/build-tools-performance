import React from 'react';
const LABEL_30810 = 'component_30810';
export function Component30810({ value = 30810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30810, 'data-value': derived.doubled }, children);
}
export default Component30810;
