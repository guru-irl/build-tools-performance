import React from 'react';
const LABEL_13321 = 'component_13321';
export function Component13321({ value = 13321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13321, 'data-value': derived.doubled }, children);
}
export default Component13321;
