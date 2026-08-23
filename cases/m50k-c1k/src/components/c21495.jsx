import React from 'react';
const LABEL_21495 = 'component_21495';
export function Component21495({ value = 21495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21495, 'data-value': derived.doubled }, children);
}
export default Component21495;
