import React from 'react';
const LABEL_33060 = 'component_33060';
export function Component33060({ value = 33060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33060, 'data-value': derived.doubled }, children);
}
export default Component33060;
