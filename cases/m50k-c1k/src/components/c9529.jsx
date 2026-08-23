import React from 'react';
const LABEL_9529 = 'component_9529';
export function Component9529({ value = 9529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9529, 'data-value': derived.doubled }, children);
}
export default Component9529;
