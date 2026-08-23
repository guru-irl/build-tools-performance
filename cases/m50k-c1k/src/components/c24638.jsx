import React from 'react';
const LABEL_24638 = 'component_24638';
export function Component24638({ value = 24638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24638, 'data-value': derived.doubled }, children);
}
export default Component24638;
