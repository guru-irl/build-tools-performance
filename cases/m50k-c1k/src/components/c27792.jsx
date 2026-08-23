import React from 'react';
const LABEL_27792 = 'component_27792';
export function Component27792({ value = 27792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27792, 'data-value': derived.doubled }, children);
}
export default Component27792;
