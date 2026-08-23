import React from 'react';
const LABEL_16348 = 'component_16348';
export function Component16348({ value = 16348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16348, 'data-value': derived.doubled }, children);
}
export default Component16348;
