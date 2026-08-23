import React from 'react';
const LABEL_21674 = 'component_21674';
export function Component21674({ value = 21674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21674, 'data-value': derived.doubled }, children);
}
export default Component21674;
