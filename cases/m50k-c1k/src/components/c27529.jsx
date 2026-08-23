import React from 'react';
const LABEL_27529 = 'component_27529';
export function Component27529({ value = 27529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27529, 'data-value': derived.doubled }, children);
}
export default Component27529;
