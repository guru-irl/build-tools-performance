import React from 'react';
const LABEL_23535 = 'component_23535';
export function Component23535({ value = 23535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23535, 'data-value': derived.doubled }, children);
}
export default Component23535;
