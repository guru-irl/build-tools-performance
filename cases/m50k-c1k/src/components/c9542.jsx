import React from 'react';
const LABEL_9542 = 'component_9542';
export function Component9542({ value = 9542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9542, 'data-value': derived.doubled }, children);
}
export default Component9542;
