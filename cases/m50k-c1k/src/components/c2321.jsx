import React from 'react';
const LABEL_2321 = 'component_2321';
export function Component2321({ value = 2321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2321, 'data-value': derived.doubled }, children);
}
export default Component2321;
