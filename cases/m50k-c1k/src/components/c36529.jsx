import React from 'react';
const LABEL_36529 = 'component_36529';
export function Component36529({ value = 36529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36529, 'data-value': derived.doubled }, children);
}
export default Component36529;
