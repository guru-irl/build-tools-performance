import React from 'react';
const LABEL_44433 = 'component_44433';
export function Component44433({ value = 44433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44433, 'data-value': derived.doubled }, children);
}
export default Component44433;
