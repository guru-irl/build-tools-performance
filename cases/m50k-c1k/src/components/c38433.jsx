import React from 'react';
const LABEL_38433 = 'component_38433';
export function Component38433({ value = 38433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38433, 'data-value': derived.doubled }, children);
}
export default Component38433;
