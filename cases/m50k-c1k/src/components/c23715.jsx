import React from 'react';
const LABEL_23715 = 'component_23715';
export function Component23715({ value = 23715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23715, 'data-value': derived.doubled }, children);
}
export default Component23715;
