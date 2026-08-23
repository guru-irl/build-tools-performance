import React from 'react';
const LABEL_20433 = 'component_20433';
export function Component20433({ value = 20433, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20433, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20433, 'data-value': derived.doubled }, children);
}
export default Component20433;
