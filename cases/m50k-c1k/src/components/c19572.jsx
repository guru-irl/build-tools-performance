import React from 'react';
const LABEL_19572 = 'component_19572';
export function Component19572({ value = 19572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19572, 'data-value': derived.doubled }, children);
}
export default Component19572;
