import React from 'react';
const LABEL_18572 = 'component_18572';
export function Component18572({ value = 18572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18572, 'data-value': derived.doubled }, children);
}
export default Component18572;
