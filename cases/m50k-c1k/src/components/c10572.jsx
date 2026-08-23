import React from 'react';
const LABEL_10572 = 'component_10572';
export function Component10572({ value = 10572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10572, 'data-value': derived.doubled }, children);
}
export default Component10572;
