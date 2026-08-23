import React from 'react';
const LABEL_35346 = 'component_35346';
export function Component35346({ value = 35346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35346, 'data-value': derived.doubled }, children);
}
export default Component35346;
