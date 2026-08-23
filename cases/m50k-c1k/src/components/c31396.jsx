import React from 'react';
const LABEL_31396 = 'component_31396';
export function Component31396({ value = 31396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31396, 'data-value': derived.doubled }, children);
}
export default Component31396;
