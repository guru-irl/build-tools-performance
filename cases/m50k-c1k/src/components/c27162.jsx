import React from 'react';
const LABEL_27162 = 'component_27162';
export function Component27162({ value = 27162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27162, 'data-value': derived.doubled }, children);
}
export default Component27162;
