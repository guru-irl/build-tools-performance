import React from 'react';
const LABEL_27572 = 'component_27572';
export function Component27572({ value = 27572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27572, 'data-value': derived.doubled }, children);
}
export default Component27572;
