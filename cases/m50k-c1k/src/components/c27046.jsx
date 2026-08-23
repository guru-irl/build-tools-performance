import React from 'react';
const LABEL_27046 = 'component_27046';
export function Component27046({ value = 27046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27046, 'data-value': derived.doubled }, children);
}
export default Component27046;
