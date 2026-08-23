import React from 'react';
const LABEL_10529 = 'component_10529';
export function Component10529({ value = 10529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10529, 'data-value': derived.doubled }, children);
}
export default Component10529;
