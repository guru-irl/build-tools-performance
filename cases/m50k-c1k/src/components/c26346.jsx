import React from 'react';
const LABEL_26346 = 'component_26346';
export function Component26346({ value = 26346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26346, 'data-value': derived.doubled }, children);
}
export default Component26346;
