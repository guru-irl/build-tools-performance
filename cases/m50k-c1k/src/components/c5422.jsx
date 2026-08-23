import React from 'react';
const LABEL_5422 = 'component_5422';
export function Component5422({ value = 5422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5422, 'data-value': derived.doubled }, children);
}
export default Component5422;
