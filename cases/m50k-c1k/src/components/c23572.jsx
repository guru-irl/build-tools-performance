import React from 'react';
const LABEL_23572 = 'component_23572';
export function Component23572({ value = 23572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23572, 'data-value': derived.doubled }, children);
}
export default Component23572;
