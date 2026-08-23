import React from 'react';
const LABEL_41433 = 'component_41433';
export function Component41433({ value = 41433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41433, 'data-value': derived.doubled }, children);
}
export default Component41433;
