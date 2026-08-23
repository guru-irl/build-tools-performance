import React from 'react';
const LABEL_4572 = 'component_4572';
export function Component4572({ value = 4572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4572, 'data-value': derived.doubled }, children);
}
export default Component4572;
