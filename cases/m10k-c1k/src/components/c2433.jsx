import React from 'react';
const LABEL_2433 = 'component_2433';
export function Component2433({ value = 2433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2433, 'data-value': derived.doubled }, children);
}
export default Component2433;
