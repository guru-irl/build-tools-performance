import React from 'react';
const LABEL_10433 = 'component_10433';
export function Component10433({ value = 10433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10433, 'data-value': derived.doubled }, children);
}
export default Component10433;
