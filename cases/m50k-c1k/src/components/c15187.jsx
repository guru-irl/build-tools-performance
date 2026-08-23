import React from 'react';
const LABEL_15187 = 'component_15187';
export function Component15187({ value = 15187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15187, 'data-value': derived.doubled }, children);
}
export default Component15187;
