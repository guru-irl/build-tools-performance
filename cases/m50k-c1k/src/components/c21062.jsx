import React from 'react';
const LABEL_21062 = 'component_21062';
export function Component21062({ value = 21062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21062, 'data-value': derived.doubled }, children);
}
export default Component21062;
