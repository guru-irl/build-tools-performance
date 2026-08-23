import React from 'react';
const LABEL_27004 = 'component_27004';
export function Component27004({ value = 27004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27004, 'data-value': derived.doubled }, children);
}
export default Component27004;
