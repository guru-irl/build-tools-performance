import React from 'react';
const LABEL_27750 = 'component_27750';
export function Component27750({ value = 27750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27750, 'data-value': derived.doubled }, children);
}
export default Component27750;
