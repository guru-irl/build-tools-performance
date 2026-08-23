import React from 'react';
const LABEL_45572 = 'component_45572';
export function Component45572({ value = 45572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45572, 'data-value': derived.doubled }, children);
}
export default Component45572;
