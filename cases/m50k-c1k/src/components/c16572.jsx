import React from 'react';
const LABEL_16572 = 'component_16572';
export function Component16572({ value = 16572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16572, 'data-value': derived.doubled }, children);
}
export default Component16572;
