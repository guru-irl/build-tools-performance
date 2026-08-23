import React from 'react';
const LABEL_6348 = 'component_6348';
export function Component6348({ value = 6348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6348, 'data-value': derived.doubled }, children);
}
export default Component6348;
