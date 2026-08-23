import React from 'react';
const LABEL_9509 = 'component_9509';
export function Component9509({ value = 9509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9509, 'data-value': derived.doubled }, children);
}
export default Component9509;
