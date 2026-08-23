import React from 'react';
const LABEL_27095 = 'component_27095';
export function Component27095({ value = 27095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27095, 'data-value': derived.doubled }, children);
}
export default Component27095;
