import React from 'react';
const LABEL_33208 = 'component_33208';
export function Component33208({ value = 33208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33208, 'data-value': derived.doubled }, children);
}
export default Component33208;
