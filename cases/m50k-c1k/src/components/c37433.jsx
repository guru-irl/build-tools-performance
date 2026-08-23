import React from 'react';
const LABEL_37433 = 'component_37433';
export function Component37433({ value = 37433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37433, 'data-value': derived.doubled }, children);
}
export default Component37433;
