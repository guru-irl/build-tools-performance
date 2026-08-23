import React from 'react';
const LABEL_42572 = 'component_42572';
export function Component42572({ value = 42572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42572, 'data-value': derived.doubled }, children);
}
export default Component42572;
