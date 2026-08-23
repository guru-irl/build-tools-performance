import React from 'react';
const LABEL_9732 = 'component_9732';
export function Component9732({ value = 9732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9732, 'data-value': derived.doubled }, children);
}
export default Component9732;
