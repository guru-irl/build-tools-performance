import React from 'react';
const LABEL_9453 = 'component_9453';
export function Component9453({ value = 9453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9453, 'data-value': derived.doubled }, children);
}
export default Component9453;
