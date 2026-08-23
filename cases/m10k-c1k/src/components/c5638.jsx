import React from 'react';
const LABEL_5638 = 'component_5638';
export function Component5638({ value = 5638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5638, 'data-value': derived.doubled }, children);
}
export default Component5638;
