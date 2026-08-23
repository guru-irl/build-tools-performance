import React from 'react';
const LABEL_34433 = 'component_34433';
export function Component34433({ value = 34433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34433, 'data-value': derived.doubled }, children);
}
export default Component34433;
