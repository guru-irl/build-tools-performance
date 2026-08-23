import React from 'react';
const LABEL_9605 = 'component_9605';
export function Component9605({ value = 9605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9605, 'data-value': derived.doubled }, children);
}
export default Component9605;
