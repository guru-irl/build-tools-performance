import React from 'react';
const LABEL_9372 = 'component_9372';
export function Component9372({ value = 9372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9372, 'data-value': derived.doubled }, children);
}
export default Component9372;
