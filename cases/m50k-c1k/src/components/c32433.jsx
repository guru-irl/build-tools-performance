import React from 'react';
const LABEL_32433 = 'component_32433';
export function Component32433({ value = 32433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32433, 'data-value': derived.doubled }, children);
}
export default Component32433;
