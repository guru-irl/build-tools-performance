import React from 'react';
const LABEL_9638 = 'component_9638';
export function Component9638({ value = 9638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9638, 'data-value': derived.doubled }, children);
}
export default Component9638;
