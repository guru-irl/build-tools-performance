import React from 'react';
const LABEL_27810 = 'component_27810';
export function Component27810({ value = 27810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27810, 'data-value': derived.doubled }, children);
}
export default Component27810;
