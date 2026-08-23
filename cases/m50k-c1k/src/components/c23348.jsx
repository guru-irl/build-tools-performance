import React from 'react';
const LABEL_23348 = 'component_23348';
export function Component23348({ value = 23348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23348, 'data-value': derived.doubled }, children);
}
export default Component23348;
