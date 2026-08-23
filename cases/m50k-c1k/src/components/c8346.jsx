import React from 'react';
const LABEL_8346 = 'component_8346';
export function Component8346({ value = 8346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8346, 'data-value': derived.doubled }, children);
}
export default Component8346;
