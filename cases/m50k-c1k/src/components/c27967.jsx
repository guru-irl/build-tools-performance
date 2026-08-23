import React from 'react';
const LABEL_27967 = 'component_27967';
export function Component27967({ value = 27967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27967, 'data-value': derived.doubled }, children);
}
export default Component27967;
