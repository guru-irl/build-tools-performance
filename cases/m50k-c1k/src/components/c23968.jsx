import React from 'react';
const LABEL_23968 = 'component_23968';
export function Component23968({ value = 23968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23968, 'data-value': derived.doubled }, children);
}
export default Component23968;
