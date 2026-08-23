import React from 'react';
const LABEL_27346 = 'component_27346';
export function Component27346({ value = 27346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27346, 'data-value': derived.doubled }, children);
}
export default Component27346;
