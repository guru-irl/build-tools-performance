import React from 'react';
const LABEL_1433 = 'component_1433';
export function Component1433({ value = 1433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1433, 'data-value': derived.doubled }, children);
}
export default Component1433;
