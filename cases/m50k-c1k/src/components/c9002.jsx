import React from 'react';
const LABEL_9002 = 'component_9002';
export function Component9002({ value = 9002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9002, 'data-value': derived.doubled }, children);
}
export default Component9002;
