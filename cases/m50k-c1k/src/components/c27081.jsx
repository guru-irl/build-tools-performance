import React from 'react';
const LABEL_27081 = 'component_27081';
export function Component27081({ value = 27081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27081, 'data-value': derived.doubled }, children);
}
export default Component27081;
