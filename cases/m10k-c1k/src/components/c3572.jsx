import React from 'react';
const LABEL_3572 = 'component_3572';
export function Component3572({ value = 3572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3572, 'data-value': derived.doubled }, children);
}
export default Component3572;
