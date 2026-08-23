import React from 'react';
const LABEL_32859 = 'component_32859';
export function Component32859({ value = 32859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32859, 'data-value': derived.doubled }, children);
}
export default Component32859;
