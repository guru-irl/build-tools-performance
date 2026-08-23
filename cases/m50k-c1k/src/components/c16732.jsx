import React from 'react';
const LABEL_16732 = 'component_16732';
export function Component16732({ value = 16732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16732, 'data-value': derived.doubled }, children);
}
export default Component16732;
