import React from 'react';
const LABEL_29810 = 'component_29810';
export function Component29810({ value = 29810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29810, 'data-value': derived.doubled }, children);
}
export default Component29810;
