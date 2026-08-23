import React from 'react';
const LABEL_33572 = 'component_33572';
export function Component33572({ value = 33572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33572, 'data-value': derived.doubled }, children);
}
export default Component33572;
