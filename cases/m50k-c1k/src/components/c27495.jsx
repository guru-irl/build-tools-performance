import React from 'react';
const LABEL_27495 = 'component_27495';
export function Component27495({ value = 27495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27495, 'data-value': derived.doubled }, children);
}
export default Component27495;
