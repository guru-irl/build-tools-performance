import React from 'react';
const LABEL_33433 = 'component_33433';
export function Component33433({ value = 33433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33433, 'data-value': derived.doubled }, children);
}
export default Component33433;
