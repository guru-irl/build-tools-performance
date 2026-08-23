import React from 'react';
const LABEL_26321 = 'component_26321';
export function Component26321({ value = 26321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26321, 'data-value': derived.doubled }, children);
}
export default Component26321;
