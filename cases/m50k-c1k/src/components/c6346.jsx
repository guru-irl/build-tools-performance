import React from 'react';
const LABEL_6346 = 'component_6346';
export function Component6346({ value = 6346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6346, 'data-value': derived.doubled }, children);
}
export default Component6346;
