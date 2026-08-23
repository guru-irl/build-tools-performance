import React from 'react';
const LABEL_23495 = 'component_23495';
export function Component23495({ value = 23495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23495, 'data-value': derived.doubled }, children);
}
export default Component23495;
