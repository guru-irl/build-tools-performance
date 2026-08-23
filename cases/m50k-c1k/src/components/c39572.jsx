import React from 'react';
const LABEL_39572 = 'component_39572';
export function Component39572({ value = 39572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39572, 'data-value': derived.doubled }, children);
}
export default Component39572;
