import React from 'react';
const LABEL_15333 = 'component_15333';
export function Component15333({ value = 15333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15333, 'data-value': derived.doubled }, children);
}
export default Component15333;
