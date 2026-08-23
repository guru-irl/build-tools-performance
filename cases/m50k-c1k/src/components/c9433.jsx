import React from 'react';
const LABEL_9433 = 'component_9433';
export function Component9433({ value = 9433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9433, 'data-value': derived.doubled }, children);
}
export default Component9433;
