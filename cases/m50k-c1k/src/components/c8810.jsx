import React from 'react';
const LABEL_8810 = 'component_8810';
export function Component8810({ value = 8810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8810, 'data-value': derived.doubled }, children);
}
export default Component8810;
