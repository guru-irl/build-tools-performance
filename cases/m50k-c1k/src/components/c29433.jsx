import React from 'react';
const LABEL_29433 = 'component_29433';
export function Component29433({ value = 29433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29433, 'data-value': derived.doubled }, children);
}
export default Component29433;
