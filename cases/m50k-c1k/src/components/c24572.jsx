import React from 'react';
const LABEL_24572 = 'component_24572';
export function Component24572({ value = 24572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24572, 'data-value': derived.doubled }, children);
}
export default Component24572;
