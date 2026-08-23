import React from 'react';
const LABEL_33296 = 'component_33296';
export function Component33296({ value = 33296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33296, 'data-value': derived.doubled }, children);
}
export default Component33296;
