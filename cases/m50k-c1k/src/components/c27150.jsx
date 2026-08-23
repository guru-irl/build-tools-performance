import React from 'react';
const LABEL_27150 = 'component_27150';
export function Component27150({ value = 27150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27150, 'data-value': derived.doubled }, children);
}
export default Component27150;
