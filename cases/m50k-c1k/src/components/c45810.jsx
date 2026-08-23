import React from 'react';
const LABEL_45810 = 'component_45810';
export function Component45810({ value = 45810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45810, 'data-value': derived.doubled }, children);
}
export default Component45810;
