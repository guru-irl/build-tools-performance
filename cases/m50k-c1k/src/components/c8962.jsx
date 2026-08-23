import React from 'react';
const LABEL_8962 = 'component_8962';
export function Component8962({ value = 8962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8962, 'data-value': derived.doubled }, children);
}
export default Component8962;
