import React from 'react';
const LABEL_572 = 'component_572';
export function Component572({ value = 572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_572, 'data-value': derived.doubled }, children);
}
export default Component572;
