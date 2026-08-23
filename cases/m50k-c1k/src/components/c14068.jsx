import React from 'react';
const LABEL_14068 = 'component_14068';
export function Component14068({ value = 14068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14068, 'data-value': derived.doubled }, children);
}
export default Component14068;
