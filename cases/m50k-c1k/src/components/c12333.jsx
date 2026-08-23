import React from 'react';
const LABEL_12333 = 'component_12333';
export function Component12333({ value = 12333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12333, 'data-value': derived.doubled }, children);
}
export default Component12333;
