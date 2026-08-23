import React from 'react';
const LABEL_43433 = 'component_43433';
export function Component43433({ value = 43433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43433, 'data-value': derived.doubled }, children);
}
export default Component43433;
