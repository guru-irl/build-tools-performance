import React from 'react';
const LABEL_27914 = 'component_27914';
export function Component27914({ value = 27914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27914, 'data-value': derived.doubled }, children);
}
export default Component27914;
