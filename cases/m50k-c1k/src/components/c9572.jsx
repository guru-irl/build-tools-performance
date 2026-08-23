import React from 'react';
const LABEL_9572 = 'component_9572';
export function Component9572({ value = 9572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9572, 'data-value': derived.doubled }, children);
}
export default Component9572;
