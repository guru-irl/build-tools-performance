import React from 'react';
const LABEL_22572 = 'component_22572';
export function Component22572({ value = 22572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22572, 'data-value': derived.doubled }, children);
}
export default Component22572;
