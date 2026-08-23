import React from 'react';
const LABEL_17433 = 'component_17433';
export function Component17433({ value = 17433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17433, 'data-value': derived.doubled }, children);
}
export default Component17433;
