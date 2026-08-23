import React from 'react';
const LABEL_16433 = 'component_16433';
export function Component16433({ value = 16433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16433, 'data-value': derived.doubled }, children);
}
export default Component16433;
