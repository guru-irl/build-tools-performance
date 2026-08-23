import React from 'react';
const LABEL_22321 = 'component_22321';
export function Component22321({ value = 22321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22321, 'data-value': derived.doubled }, children);
}
export default Component22321;
