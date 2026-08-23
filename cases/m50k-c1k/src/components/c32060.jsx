import React from 'react';
const LABEL_32060 = 'component_32060';
export function Component32060({ value = 32060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32060, 'data-value': derived.doubled }, children);
}
export default Component32060;
