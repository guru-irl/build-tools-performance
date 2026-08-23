import React from 'react';
const LABEL_810 = 'component_810';
export function Component810({ value = 810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_810, 'data-value': derived.doubled }, children);
}
export default Component810;
