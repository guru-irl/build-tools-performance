import React from 'react';
const LABEL_26433 = 'component_26433';
export function Component26433({ value = 26433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26433, 'data-value': derived.doubled }, children);
}
export default Component26433;
