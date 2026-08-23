import React from 'react';
const LABEL_23474 = 'component_23474';
export function Component23474({ value = 23474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23474, 'data-value': derived.doubled }, children);
}
export default Component23474;
