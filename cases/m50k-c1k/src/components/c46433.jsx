import React from 'react';
const LABEL_46433 = 'component_46433';
export function Component46433({ value = 46433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46433, 'data-value': derived.doubled }, children);
}
export default Component46433;
