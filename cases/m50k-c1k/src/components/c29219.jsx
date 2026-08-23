import React from 'react';
const LABEL_29219 = 'component_29219';
export function Component29219({ value = 29219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29219, 'data-value': derived.doubled }, children);
}
export default Component29219;
