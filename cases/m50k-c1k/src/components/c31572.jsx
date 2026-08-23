import React from 'react';
const LABEL_31572 = 'component_31572';
export function Component31572({ value = 31572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31572, 'data-value': derived.doubled }, children);
}
export default Component31572;
