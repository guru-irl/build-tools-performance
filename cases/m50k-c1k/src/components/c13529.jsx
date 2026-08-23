import React from 'react';
const LABEL_13529 = 'component_13529';
export function Component13529({ value = 13529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13529, 'data-value': derived.doubled }, children);
}
export default Component13529;
