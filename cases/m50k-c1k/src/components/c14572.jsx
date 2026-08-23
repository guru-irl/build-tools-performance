import React from 'react';
const LABEL_14572 = 'component_14572';
export function Component14572({ value = 14572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14572, 'data-value': derived.doubled }, children);
}
export default Component14572;
