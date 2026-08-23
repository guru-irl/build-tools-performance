import React from 'react';
const LABEL_2572 = 'component_2572';
export function Component2572({ value = 2572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2572, 'data-value': derived.doubled }, children);
}
export default Component2572;
