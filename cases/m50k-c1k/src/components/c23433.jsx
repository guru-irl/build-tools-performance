import React from 'react';
const LABEL_23433 = 'component_23433';
export function Component23433({ value = 23433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23433, 'data-value': derived.doubled }, children);
}
export default Component23433;
