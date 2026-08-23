import React from 'react';
const LABEL_23871 = 'component_23871';
export function Component23871({ value = 23871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23871, 'data-value': derived.doubled }, children);
}
export default Component23871;
