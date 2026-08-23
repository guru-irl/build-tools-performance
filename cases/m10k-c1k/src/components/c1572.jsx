import React from 'react';
const LABEL_1572 = 'component_1572';
export function Component1572({ value = 1572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1572, 'data-value': derived.doubled }, children);
}
export default Component1572;
