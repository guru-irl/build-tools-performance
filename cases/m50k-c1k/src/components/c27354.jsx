import React from 'react';
const LABEL_27354 = 'component_27354';
export function Component27354({ value = 27354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27354, 'data-value': derived.doubled }, children);
}
export default Component27354;
