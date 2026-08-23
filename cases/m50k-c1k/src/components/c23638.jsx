import React from 'react';
const LABEL_23638 = 'component_23638';
export function Component23638({ value = 23638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23638, 'data-value': derived.doubled }, children);
}
export default Component23638;
