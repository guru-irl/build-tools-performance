import React from 'react';
const LABEL_23617 = 'component_23617';
export function Component23617({ value = 23617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23617, 'data-value': derived.doubled }, children);
}
export default Component23617;
