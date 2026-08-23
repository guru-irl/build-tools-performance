import React from 'react';
const LABEL_22529 = 'component_22529';
export function Component22529({ value = 22529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22529, 'data-value': derived.doubled }, children);
}
export default Component22529;
