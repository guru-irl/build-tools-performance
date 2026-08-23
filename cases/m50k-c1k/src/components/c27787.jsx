import React from 'react';
const LABEL_27787 = 'component_27787';
export function Component27787({ value = 27787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27787, 'data-value': derived.doubled }, children);
}
export default Component27787;
