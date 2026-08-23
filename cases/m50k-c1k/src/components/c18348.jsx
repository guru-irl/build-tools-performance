import React from 'react';
const LABEL_18348 = 'component_18348';
export function Component18348({ value = 18348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18348, 'data-value': derived.doubled }, children);
}
export default Component18348;
