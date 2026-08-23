import React from 'react';
const LABEL_3060 = 'component_3060';
export function Component3060({ value = 3060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3060, 'data-value': derived.doubled }, children);
}
export default Component3060;
