import React from 'react';
const LABEL_9396 = 'component_9396';
export function Component9396({ value = 9396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9396, 'data-value': derived.doubled }, children);
}
export default Component9396;
