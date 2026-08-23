import React from 'react';
const LABEL_43810 = 'component_43810';
export function Component43810({ value = 43810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43810, 'data-value': derived.doubled }, children);
}
export default Component43810;
