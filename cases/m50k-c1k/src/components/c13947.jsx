import React from 'react';
const LABEL_13947 = 'component_13947';
export function Component13947({ value = 13947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13947, 'data-value': derived.doubled }, children);
}
export default Component13947;
