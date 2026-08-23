import React from 'react';
const LABEL_38572 = 'component_38572';
export function Component38572({ value = 38572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38572, 'data-value': derived.doubled }, children);
}
export default Component38572;
