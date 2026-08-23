import React from 'react';
const LABEL_27789 = 'component_27789';
export function Component27789({ value = 27789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27789, 'data-value': derived.doubled }, children);
}
export default Component27789;
