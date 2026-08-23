import React from 'react';
const LABEL_27858 = 'component_27858';
export function Component27858({ value = 27858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27858, 'data-value': derived.doubled }, children);
}
export default Component27858;
