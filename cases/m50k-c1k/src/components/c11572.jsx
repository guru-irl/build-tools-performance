import React from 'react';
const LABEL_11572 = 'component_11572';
export function Component11572({ value = 11572, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11572, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11572, 'data-value': derived.doubled }, children);
}
export default Component11572;
