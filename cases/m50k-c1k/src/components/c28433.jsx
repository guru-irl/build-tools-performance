import React from 'react';
const LABEL_28433 = 'component_28433';
export function Component28433({ value = 28433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28433, 'data-value': derived.doubled }, children);
}
export default Component28433;
