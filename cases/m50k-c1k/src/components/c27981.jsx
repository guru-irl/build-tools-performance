import React from 'react';
const LABEL_27981 = 'component_27981';
export function Component27981({ value = 27981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27981, 'data-value': derived.doubled }, children);
}
export default Component27981;
