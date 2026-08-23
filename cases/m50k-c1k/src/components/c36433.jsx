import React from 'react';
const LABEL_36433 = 'component_36433';
export function Component36433({ value = 36433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36433, 'data-value': derived.doubled }, children);
}
export default Component36433;
