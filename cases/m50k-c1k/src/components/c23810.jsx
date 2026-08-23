import React from 'react';
const LABEL_23810 = 'component_23810';
export function Component23810({ value = 23810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23810, 'data-value': derived.doubled }, children);
}
export default Component23810;
