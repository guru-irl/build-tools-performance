import React from 'react';
const LABEL_2348 = 'component_2348';
export function Component2348({ value = 2348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2348, 'data-value': derived.doubled }, children);
}
export default Component2348;
