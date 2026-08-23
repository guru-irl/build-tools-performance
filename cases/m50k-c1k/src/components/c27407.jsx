import React from 'react';
const LABEL_27407 = 'component_27407';
export function Component27407({ value = 27407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27407, 'data-value': derived.doubled }, children);
}
export default Component27407;
