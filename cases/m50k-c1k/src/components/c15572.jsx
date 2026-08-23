import React from 'react';
const LABEL_15572 = 'component_15572';
export function Component15572({ value = 15572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15572, 'data-value': derived.doubled }, children);
}
export default Component15572;
