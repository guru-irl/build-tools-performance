import React from 'react';
const LABEL_9810 = 'component_9810';
export function Component9810({ value = 9810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9810, 'data-value': derived.doubled }, children);
}
export default Component9810;
