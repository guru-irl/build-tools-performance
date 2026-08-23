import React from 'react';
const LABEL_17159 = 'component_17159';
export function Component17159({ value = 17159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17159, 'data-value': derived.doubled }, children);
}
export default Component17159;
