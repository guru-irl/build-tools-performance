import React from 'react';
const LABEL_32348 = 'component_32348';
export function Component32348({ value = 32348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32348, 'data-value': derived.doubled }, children);
}
export default Component32348;
