import React from 'react';
const LABEL_27753 = 'component_27753';
export function Component27753({ value = 27753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27753, 'data-value': derived.doubled }, children);
}
export default Component27753;
