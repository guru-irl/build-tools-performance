import React from 'react';
const LABEL_27605 = 'component_27605';
export function Component27605({ value = 27605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27605, 'data-value': derived.doubled }, children);
}
export default Component27605;
