import React from 'react';
const LABEL_12539 = 'component_12539';
export function Component12539({ value = 12539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12539, 'data-value': derived.doubled }, children);
}
export default Component12539;
