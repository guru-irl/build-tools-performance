import React from 'react';
const LABEL_3731 = 'component_3731';
export function Component3731({ value = 3731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3731, 'data-value': derived.doubled }, children);
}
export default Component3731;
