import React from 'react';
const LABEL_12321 = 'component_12321';
export function Component12321({ value = 12321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12321, 'data-value': derived.doubled }, children);
}
export default Component12321;
