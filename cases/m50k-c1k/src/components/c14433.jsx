import React from 'react';
const LABEL_14433 = 'component_14433';
export function Component14433({ value = 14433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14433, 'data-value': derived.doubled }, children);
}
export default Component14433;
