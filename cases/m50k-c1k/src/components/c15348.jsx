import React from 'react';
const LABEL_15348 = 'component_15348';
export function Component15348({ value = 15348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15348, 'data-value': derived.doubled }, children);
}
export default Component15348;
