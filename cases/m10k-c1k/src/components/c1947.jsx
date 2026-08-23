import React from 'react';
const LABEL_1947 = 'component_1947';
export function Component1947({ value = 1947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1947, 'data-value': derived.doubled }, children);
}
export default Component1947;
