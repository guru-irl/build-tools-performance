import React from 'react';
const LABEL_24060 = 'component_24060';
export function Component24060({ value = 24060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24060, 'data-value': derived.doubled }, children);
}
export default Component24060;
