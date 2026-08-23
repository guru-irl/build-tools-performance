import React from 'react';
const LABEL_18433 = 'component_18433';
export function Component18433({ value = 18433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18433, 'data-value': derived.doubled }, children);
}
export default Component18433;
