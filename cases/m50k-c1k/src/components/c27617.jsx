import React from 'react';
const LABEL_27617 = 'component_27617';
export function Component27617({ value = 27617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27617, 'data-value': derived.doubled }, children);
}
export default Component27617;
