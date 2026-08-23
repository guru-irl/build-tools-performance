import React from 'react';
const LABEL_33346 = 'component_33346';
export function Component33346({ value = 33346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33346, 'data-value': derived.doubled }, children);
}
export default Component33346;
