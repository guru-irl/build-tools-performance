import React from 'react';
const LABEL_947 = 'component_947';
export function Component947({ value = 947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_947, 'data-value': derived.doubled }, children);
}
export default Component947;
