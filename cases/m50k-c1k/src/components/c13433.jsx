import React from 'react';
const LABEL_13433 = 'component_13433';
export function Component13433({ value = 13433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13433, 'data-value': derived.doubled }, children);
}
export default Component13433;
