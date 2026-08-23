import React from 'react';
const LABEL_20572 = 'component_20572';
export function Component20572({ value = 20572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20572, 'data-value': derived.doubled }, children);
}
export default Component20572;
