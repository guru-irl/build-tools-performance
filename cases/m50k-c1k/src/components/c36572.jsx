import React from 'react';
const LABEL_36572 = 'component_36572';
export function Component36572({ value = 36572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36572, 'data-value': derived.doubled }, children);
}
export default Component36572;
