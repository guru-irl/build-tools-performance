import React from 'react';
const LABEL_42321 = 'component_42321';
export function Component42321({ value = 42321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42321, 'data-value': derived.doubled }, children);
}
export default Component42321;
