import React from 'react';
const LABEL_21433 = 'component_21433';
export function Component21433({ value = 21433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21433, 'data-value': derived.doubled }, children);
}
export default Component21433;
