import React from 'react';
const LABEL_27912 = 'component_27912';
export function Component27912({ value = 27912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27912, 'data-value': derived.doubled }, children);
}
export default Component27912;
