import React from 'react';
const LABEL_9465 = 'component_9465';
export function Component9465({ value = 9465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9465, 'data-value': derived.doubled }, children);
}
export default Component9465;
