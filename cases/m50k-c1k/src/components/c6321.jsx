import React from 'react';
const LABEL_6321 = 'component_6321';
export function Component6321({ value = 6321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6321, 'data-value': derived.doubled }, children);
}
export default Component6321;
