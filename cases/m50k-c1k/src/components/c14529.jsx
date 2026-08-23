import React from 'react';
const LABEL_14529 = 'component_14529';
export function Component14529({ value = 14529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14529, 'data-value': derived.doubled }, children);
}
export default Component14529;
