import React from 'react';
const LABEL_23731 = 'component_23731';
export function Component23731({ value = 23731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23731, 'data-value': derived.doubled }, children);
}
export default Component23731;
