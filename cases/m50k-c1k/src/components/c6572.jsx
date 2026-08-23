import React from 'react';
const LABEL_6572 = 'component_6572';
export function Component6572({ value = 6572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6572, 'data-value': derived.doubled }, children);
}
export default Component6572;
