import React from 'react';
const LABEL_23093 = 'component_23093';
export function Component23093({ value = 23093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23093, 'data-value': derived.doubled }, children);
}
export default Component23093;
