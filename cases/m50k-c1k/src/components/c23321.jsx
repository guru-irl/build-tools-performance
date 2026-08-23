import React from 'react';
const LABEL_23321 = 'component_23321';
export function Component23321({ value = 23321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23321, 'data-value': derived.doubled }, children);
}
export default Component23321;
