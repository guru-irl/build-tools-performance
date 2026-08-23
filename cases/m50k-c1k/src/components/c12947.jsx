import React from 'react';
const LABEL_12947 = 'component_12947';
export function Component12947({ value = 12947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12947, 'data-value': derived.doubled }, children);
}
export default Component12947;
