import React from 'react';
const LABEL_39348 = 'component_39348';
export function Component39348({ value = 39348, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39348, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39348, 'data-value': derived.doubled }, children);
}
export default Component39348;
