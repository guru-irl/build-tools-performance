import React from 'react';
const LABEL_5433 = 'component_5433';
export function Component5433({ value = 5433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5433, 'data-value': derived.doubled }, children);
}
export default Component5433;
