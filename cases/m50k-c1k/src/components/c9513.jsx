import React from 'react';
const LABEL_9513 = 'component_9513';
export function Component9513({ value = 9513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9513, 'data-value': derived.doubled }, children);
}
export default Component9513;
