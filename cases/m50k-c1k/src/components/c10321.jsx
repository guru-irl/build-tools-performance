import React from 'react';
const LABEL_10321 = 'component_10321';
export function Component10321({ value = 10321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10321, 'data-value': derived.doubled }, children);
}
export default Component10321;
