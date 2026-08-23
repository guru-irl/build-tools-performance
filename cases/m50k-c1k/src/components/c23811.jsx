import React from 'react';
const LABEL_23811 = 'component_23811';
export function Component23811({ value = 23811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23811, 'data-value': derived.doubled }, children);
}
export default Component23811;
