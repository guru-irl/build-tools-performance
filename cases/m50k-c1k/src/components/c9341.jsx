import React from 'react';
const LABEL_9341 = 'component_9341';
export function Component9341({ value = 9341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9341, 'data-value': derived.doubled }, children);
}
export default Component9341;
