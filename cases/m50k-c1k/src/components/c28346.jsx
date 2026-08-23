import React from 'react';
const LABEL_28346 = 'component_28346';
export function Component28346({ value = 28346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28346, 'data-value': derived.doubled }, children);
}
export default Component28346;
