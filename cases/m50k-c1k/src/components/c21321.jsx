import React from 'react';
const LABEL_21321 = 'component_21321';
export function Component21321({ value = 21321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21321, 'data-value': derived.doubled }, children);
}
export default Component21321;
