import React from 'react';
const LABEL_38348 = 'component_38348';
export function Component38348({ value = 38348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38348, 'data-value': derived.doubled }, children);
}
export default Component38348;
