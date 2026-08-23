import React from 'react';
const LABEL_321 = 'component_321';
export function Component321({ value = 321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_321, 'data-value': derived.doubled }, children);
}
export default Component321;
