import React from 'react';
const LABEL_1836 = 'component_1836';
export function Component1836({ value = 1836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1836, 'data-value': derived.doubled }, children);
}
export default Component1836;
