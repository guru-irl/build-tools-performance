import React from 'react';
const LABEL_3346 = 'component_3346';
export function Component3346({ value = 3346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3346, 'data-value': derived.doubled }, children);
}
export default Component3346;
