import React from 'react';
const LABEL_8572 = 'component_8572';
export function Component8572({ value = 8572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8572, 'data-value': derived.doubled }, children);
}
export default Component8572;
