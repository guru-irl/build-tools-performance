import React from 'react';
const LABEL_9594 = 'component_9594';
export function Component9594({ value = 9594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9594, 'data-value': derived.doubled }, children);
}
export default Component9594;
