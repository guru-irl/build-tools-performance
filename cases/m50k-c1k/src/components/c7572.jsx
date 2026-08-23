import React from 'react';
const LABEL_7572 = 'component_7572';
export function Component7572({ value = 7572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7572, 'data-value': derived.doubled }, children);
}
export default Component7572;
