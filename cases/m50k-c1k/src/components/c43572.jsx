import React from 'react';
const LABEL_43572 = 'component_43572';
export function Component43572({ value = 43572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43572, 'data-value': derived.doubled }, children);
}
export default Component43572;
