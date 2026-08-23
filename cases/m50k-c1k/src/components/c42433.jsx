import React from 'react';
const LABEL_42433 = 'component_42433';
export function Component42433({ value = 42433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42433, 'data-value': derived.doubled }, children);
}
export default Component42433;
