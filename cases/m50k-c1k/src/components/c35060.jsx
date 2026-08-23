import React from 'react';
const LABEL_35060 = 'component_35060';
export function Component35060({ value = 35060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35060, 'data-value': derived.doubled }, children);
}
export default Component35060;
