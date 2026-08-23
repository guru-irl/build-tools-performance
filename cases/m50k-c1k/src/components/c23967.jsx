import React from 'react';
const LABEL_23967 = 'component_23967';
export function Component23967({ value = 23967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23967, 'data-value': derived.doubled }, children);
}
export default Component23967;
