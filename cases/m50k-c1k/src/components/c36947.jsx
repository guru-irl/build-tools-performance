import React from 'react';
const LABEL_36947 = 'component_36947';
export function Component36947({ value = 36947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36947, 'data-value': derived.doubled }, children);
}
export default Component36947;
