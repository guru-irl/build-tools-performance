import React from 'react';
const LABEL_14321 = 'component_14321';
export function Component14321({ value = 14321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14321, 'data-value': derived.doubled }, children);
}
export default Component14321;
