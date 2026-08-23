import React from 'react';
const LABEL_9435 = 'component_9435';
export function Component9435({ value = 9435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9435, 'data-value': derived.doubled }, children);
}
export default Component9435;
