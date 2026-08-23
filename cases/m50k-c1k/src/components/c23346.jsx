import React from 'react';
const LABEL_23346 = 'component_23346';
export function Component23346({ value = 23346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23346, 'data-value': derived.doubled }, children);
}
export default Component23346;
