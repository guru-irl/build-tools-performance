import React from 'react';
const LABEL_17784 = 'component_17784';
export function Component17784({ value = 17784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17784, 'data-value': derived.doubled }, children);
}
export default Component17784;
