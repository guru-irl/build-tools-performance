import React from 'react';
const LABEL_23529 = 'component_23529';
export function Component23529({ value = 23529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23529, 'data-value': derived.doubled }, children);
}
export default Component23529;
