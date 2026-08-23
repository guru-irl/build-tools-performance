import React from 'react';
const LABEL_17346 = 'component_17346';
export function Component17346({ value = 17346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17346, 'data-value': derived.doubled }, children);
}
export default Component17346;
