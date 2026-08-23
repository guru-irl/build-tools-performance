import React from 'react';
const LABEL_32438 = 'component_32438';
export function Component32438({ value = 32438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32438, 'data-value': derived.doubled }, children);
}
export default Component32438;
