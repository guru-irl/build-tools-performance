import React from 'react';
const LABEL_33065 = 'component_33065';
export function Component33065({ value = 33065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33065, 'data-value': derived.doubled }, children);
}
export default Component33065;
