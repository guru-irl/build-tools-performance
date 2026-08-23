import React from 'react';
const LABEL_9552 = 'component_9552';
export function Component9552({ value = 9552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9552, 'data-value': derived.doubled }, children);
}
export default Component9552;
