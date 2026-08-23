import React from 'react';
const LABEL_9348 = 'component_9348';
export function Component9348({ value = 9348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9348, 'data-value': derived.doubled }, children);
}
export default Component9348;
