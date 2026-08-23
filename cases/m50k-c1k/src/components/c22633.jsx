import React from 'react';
const LABEL_22633 = 'component_22633';
export function Component22633({ value = 22633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22633, 'data-value': derived.doubled }, children);
}
export default Component22633;
