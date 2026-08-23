import React from 'react';
const LABEL_29572 = 'component_29572';
export function Component29572({ value = 29572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29572, 'data-value': derived.doubled }, children);
}
export default Component29572;
