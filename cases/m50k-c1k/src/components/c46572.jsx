import React from 'react';
const LABEL_46572 = 'component_46572';
export function Component46572({ value = 46572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46572, 'data-value': derived.doubled }, children);
}
export default Component46572;
