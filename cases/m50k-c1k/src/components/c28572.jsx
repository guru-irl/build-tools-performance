import React from 'react';
const LABEL_28572 = 'component_28572';
export function Component28572({ value = 28572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28572, 'data-value': derived.doubled }, children);
}
export default Component28572;
