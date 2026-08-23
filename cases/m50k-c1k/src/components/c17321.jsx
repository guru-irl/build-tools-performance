import React from 'react';
const LABEL_17321 = 'component_17321';
export function Component17321({ value = 17321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17321, 'data-value': derived.doubled }, children);
}
export default Component17321;
