import React from 'react';
const LABEL_39433 = 'component_39433';
export function Component39433({ value = 39433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39433, 'data-value': derived.doubled }, children);
}
export default Component39433;
