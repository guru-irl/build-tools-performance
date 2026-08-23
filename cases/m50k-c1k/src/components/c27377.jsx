import React from 'react';
const LABEL_27377 = 'component_27377';
export function Component27377({ value = 27377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27377, 'data-value': derived.doubled }, children);
}
export default Component27377;
