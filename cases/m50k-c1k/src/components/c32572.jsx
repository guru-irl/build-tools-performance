import React from 'react';
const LABEL_32572 = 'component_32572';
export function Component32572({ value = 32572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32572, 'data-value': derived.doubled }, children);
}
export default Component32572;
