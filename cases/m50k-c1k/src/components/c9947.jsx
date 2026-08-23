import React from 'react';
const LABEL_9947 = 'component_9947';
export function Component9947({ value = 9947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9947, 'data-value': derived.doubled }, children);
}
export default Component9947;
