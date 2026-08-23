import React from 'react';
const LABEL_27243 = 'component_27243';
export function Component27243({ value = 27243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27243, 'data-value': derived.doubled }, children);
}
export default Component27243;
