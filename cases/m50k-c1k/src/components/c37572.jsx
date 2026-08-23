import React from 'react';
const LABEL_37572 = 'component_37572';
export function Component37572({ value = 37572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37572, 'data-value': derived.doubled }, children);
}
export default Component37572;
