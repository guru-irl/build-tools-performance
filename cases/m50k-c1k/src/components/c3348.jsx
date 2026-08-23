import React from 'react';
const LABEL_3348 = 'component_3348';
export function Component3348({ value = 3348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3348, 'data-value': derived.doubled }, children);
}
export default Component3348;
