import React from 'react';
const LABEL_9477 = 'component_9477';
export function Component9477({ value = 9477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9477, 'data-value': derived.doubled }, children);
}
export default Component9477;
