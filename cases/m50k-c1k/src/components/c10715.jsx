import React from 'react';
const LABEL_10715 = 'component_10715';
export function Component10715({ value = 10715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10715, 'data-value': derived.doubled }, children);
}
export default Component10715;
