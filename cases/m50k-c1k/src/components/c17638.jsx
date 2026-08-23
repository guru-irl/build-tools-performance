import React from 'react';
const LABEL_17638 = 'component_17638';
export function Component17638({ value = 17638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17638, 'data-value': derived.doubled }, children);
}
export default Component17638;
