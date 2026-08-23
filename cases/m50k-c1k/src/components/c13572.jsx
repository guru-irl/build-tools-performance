import React from 'react';
const LABEL_13572 = 'component_13572';
export function Component13572({ value = 13572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13572, 'data-value': derived.doubled }, children);
}
export default Component13572;
