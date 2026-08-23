import React from 'react';
const LABEL_34572 = 'component_34572';
export function Component34572({ value = 34572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34572, 'data-value': derived.doubled }, children);
}
export default Component34572;
