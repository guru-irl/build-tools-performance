import React from 'react';
const LABEL_25810 = 'component_25810';
export function Component25810({ value = 25810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25810, 'data-value': derived.doubled }, children);
}
export default Component25810;
