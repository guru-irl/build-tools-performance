import React from 'react';
const LABEL_8433 = 'component_8433';
export function Component8433({ value = 8433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8433, 'data-value': derived.doubled }, children);
}
export default Component8433;
