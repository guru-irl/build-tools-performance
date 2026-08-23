import React from 'react';
const LABEL_35433 = 'component_35433';
export function Component35433({ value = 35433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35433, 'data-value': derived.doubled }, children);
}
export default Component35433;
