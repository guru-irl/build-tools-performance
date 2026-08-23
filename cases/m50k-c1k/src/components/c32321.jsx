import React from 'react';
const LABEL_32321 = 'component_32321';
export function Component32321({ value = 32321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32321, 'data-value': derived.doubled }, children);
}
export default Component32321;
