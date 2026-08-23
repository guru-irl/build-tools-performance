import React from 'react';
const LABEL_21348 = 'component_21348';
export function Component21348({ value = 21348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21348, 'data-value': derived.doubled }, children);
}
export default Component21348;
