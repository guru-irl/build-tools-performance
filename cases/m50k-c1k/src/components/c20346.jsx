import React from 'react';
const LABEL_20346 = 'component_20346';
export function Component20346({ value = 20346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20346, 'data-value': derived.doubled }, children);
}
export default Component20346;
