import React from 'react';
const LABEL_9471 = 'component_9471';
export function Component9471({ value = 9471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9471, 'data-value': derived.doubled }, children);
}
export default Component9471;
