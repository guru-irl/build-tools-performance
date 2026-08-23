import React from 'react';
const LABEL_21605 = 'component_21605';
export function Component21605({ value = 21605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21605, 'data-value': derived.doubled }, children);
}
export default Component21605;
