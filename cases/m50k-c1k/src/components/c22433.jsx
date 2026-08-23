import React from 'react';
const LABEL_22433 = 'component_22433';
export function Component22433({ value = 22433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22433, 'data-value': derived.doubled }, children);
}
export default Component22433;
