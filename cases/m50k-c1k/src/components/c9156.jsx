import React from 'react';
const LABEL_9156 = 'component_9156';
export function Component9156({ value = 9156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9156, 'data-value': derived.doubled }, children);
}
export default Component9156;
