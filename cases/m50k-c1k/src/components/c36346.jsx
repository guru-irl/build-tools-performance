import React from 'react';
const LABEL_36346 = 'component_36346';
export function Component36346({ value = 36346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36346, 'data-value': derived.doubled }, children);
}
export default Component36346;
