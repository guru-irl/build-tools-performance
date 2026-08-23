import React from 'react';
const LABEL_6433 = 'component_6433';
export function Component6433({ value = 6433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6433, 'data-value': derived.doubled }, children);
}
export default Component6433;
