import React from 'react';
const LABEL_40433 = 'component_40433';
export function Component40433({ value = 40433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40433, 'data-value': derived.doubled }, children);
}
export default Component40433;
