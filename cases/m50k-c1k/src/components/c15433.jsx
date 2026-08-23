import React from 'react';
const LABEL_15433 = 'component_15433';
export function Component15433({ value = 15433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15433, 'data-value': derived.doubled }, children);
}
export default Component15433;
