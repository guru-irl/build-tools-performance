import React from 'react';
const LABEL_21572 = 'component_21572';
export function Component21572({ value = 21572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21572, 'data-value': derived.doubled }, children);
}
export default Component21572;
