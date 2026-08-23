import React from 'react';
const LABEL_34810 = 'component_34810';
export function Component34810({ value = 34810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34810, 'data-value': derived.doubled }, children);
}
export default Component34810;
