import React from 'react';
const LABEL_12572 = 'component_12572';
export function Component12572({ value = 12572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12572, 'data-value': derived.doubled }, children);
}
export default Component12572;
