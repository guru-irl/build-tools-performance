import React from 'react';
const LABEL_32638 = 'component_32638';
export function Component32638({ value = 32638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32638, 'data-value': derived.doubled }, children);
}
export default Component32638;
