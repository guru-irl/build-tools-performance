import React from 'react';
const LABEL_33348 = 'component_33348';
export function Component33348({ value = 33348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33348, 'data-value': derived.doubled }, children);
}
export default Component33348;
