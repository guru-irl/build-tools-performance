import React from 'react';
const LABEL_433 = 'component_433';
export function Component433({ value = 433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_433, 'data-value': derived.doubled }, children);
}
export default Component433;
