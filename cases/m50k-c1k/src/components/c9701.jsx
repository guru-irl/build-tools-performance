import React from 'react';
const LABEL_9701 = 'component_9701';
export function Component9701({ value = 9701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9701, 'data-value': derived.doubled }, children);
}
export default Component9701;
