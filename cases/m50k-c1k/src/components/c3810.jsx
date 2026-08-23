import React from 'react';
const LABEL_3810 = 'component_3810';
export function Component3810({ value = 3810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3810, 'data-value': derived.doubled }, children);
}
export default Component3810;
