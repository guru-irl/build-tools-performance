import React from 'react';
const LABEL_27433 = 'component_27433';
export function Component27433({ value = 27433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27433, 'data-value': derived.doubled }, children);
}
export default Component27433;
