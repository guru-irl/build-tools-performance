import React from 'react';
const LABEL_42060 = 'component_42060';
export function Component42060({ value = 42060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42060, 'data-value': derived.doubled }, children);
}
export default Component42060;
