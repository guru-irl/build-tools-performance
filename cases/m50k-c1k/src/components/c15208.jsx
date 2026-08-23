import React from 'react';
const LABEL_15208 = 'component_15208';
export function Component15208({ value = 15208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15208, 'data-value': derived.doubled }, children);
}
export default Component15208;
