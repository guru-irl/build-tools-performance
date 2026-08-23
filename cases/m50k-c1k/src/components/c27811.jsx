import React from 'react';
const LABEL_27811 = 'component_27811';
export function Component27811({ value = 27811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27811, 'data-value': derived.doubled }, children);
}
export default Component27811;
