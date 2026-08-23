import React from 'react';
const LABEL_13348 = 'component_13348';
export function Component13348({ value = 13348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13348, 'data-value': derived.doubled }, children);
}
export default Component13348;
