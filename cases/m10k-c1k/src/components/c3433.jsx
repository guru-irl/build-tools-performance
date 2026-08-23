import React from 'react';
const LABEL_3433 = 'component_3433';
export function Component3433({ value = 3433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3433, 'data-value': derived.doubled }, children);
}
export default Component3433;
