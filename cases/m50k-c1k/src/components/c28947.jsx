import React from 'react';
const LABEL_28947 = 'component_28947';
export function Component28947({ value = 28947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28947, 'data-value': derived.doubled }, children);
}
export default Component28947;
