import React from 'react';
const LABEL_5572 = 'component_5572';
export function Component5572({ value = 5572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5572, 'data-value': derived.doubled }, children);
}
export default Component5572;
