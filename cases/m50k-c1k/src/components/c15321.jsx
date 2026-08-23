import React from 'react';
const LABEL_15321 = 'component_15321';
export function Component15321({ value = 15321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15321, 'data-value': derived.doubled }, children);
}
export default Component15321;
