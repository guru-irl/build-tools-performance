import React from 'react';
const LABEL_27170 = 'component_27170';
export function Component27170({ value = 27170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27170, 'data-value': derived.doubled }, children);
}
export default Component27170;
