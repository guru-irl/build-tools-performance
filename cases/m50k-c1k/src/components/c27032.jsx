import React from 'react';
const LABEL_27032 = 'component_27032';
export function Component27032({ value = 27032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27032, 'data-value': derived.doubled }, children);
}
export default Component27032;
