import React from 'react';
const LABEL_20947 = 'component_20947';
export function Component20947({ value = 20947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20947, 'data-value': derived.doubled }, children);
}
export default Component20947;
