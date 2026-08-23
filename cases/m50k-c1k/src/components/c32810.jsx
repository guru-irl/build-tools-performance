import React from 'react';
const LABEL_32810 = 'component_32810';
export function Component32810({ value = 32810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32810, 'data-value': derived.doubled }, children);
}
export default Component32810;
