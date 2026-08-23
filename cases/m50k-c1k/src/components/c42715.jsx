import React from 'react';
const LABEL_42715 = 'component_42715';
export function Component42715({ value = 42715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42715, 'data-value': derived.doubled }, children);
}
export default Component42715;
