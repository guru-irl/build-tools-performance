import React from 'react';
const LABEL_9213 = 'component_9213';
export function Component9213({ value = 9213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9213, 'data-value': derived.doubled }, children);
}
export default Component9213;
