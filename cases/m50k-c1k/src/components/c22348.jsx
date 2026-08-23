import React from 'react';
const LABEL_22348 = 'component_22348';
export function Component22348({ value = 22348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22348, 'data-value': derived.doubled }, children);
}
export default Component22348;
