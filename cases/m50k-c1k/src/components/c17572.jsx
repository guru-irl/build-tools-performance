import React from 'react';
const LABEL_17572 = 'component_17572';
export function Component17572({ value = 17572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17572, 'data-value': derived.doubled }, children);
}
export default Component17572;
