import React from 'react';
const LABEL_33321 = 'component_33321';
export function Component33321({ value = 33321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33321, 'data-value': derived.doubled }, children);
}
export default Component33321;
