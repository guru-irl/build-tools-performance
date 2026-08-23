import React from 'react';
const LABEL_9134 = 'component_9134';
export function Component9134({ value = 9134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9134, 'data-value': derived.doubled }, children);
}
export default Component9134;
