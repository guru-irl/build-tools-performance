import React from 'react';
const LABEL_25433 = 'component_25433';
export function Component25433({ value = 25433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25433, 'data-value': derived.doubled }, children);
}
export default Component25433;
