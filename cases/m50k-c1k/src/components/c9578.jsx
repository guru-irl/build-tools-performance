import React from 'react';
const LABEL_9578 = 'component_9578';
export function Component9578({ value = 9578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9578, 'data-value': derived.doubled }, children);
}
export default Component9578;
