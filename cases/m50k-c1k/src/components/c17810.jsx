import React from 'react';
const LABEL_17810 = 'component_17810';
export function Component17810({ value = 17810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17810, 'data-value': derived.doubled }, children);
}
export default Component17810;
