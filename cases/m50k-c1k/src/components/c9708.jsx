import React from 'react';
const LABEL_9708 = 'component_9708';
export function Component9708({ value = 9708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9708, 'data-value': derived.doubled }, children);
}
export default Component9708;
