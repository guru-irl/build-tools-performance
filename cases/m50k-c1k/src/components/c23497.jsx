import React from 'react';
const LABEL_23497 = 'component_23497';
export function Component23497({ value = 23497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23497, 'data-value': derived.doubled }, children);
}
export default Component23497;
