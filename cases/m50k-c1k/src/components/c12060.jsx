import React from 'react';
const LABEL_12060 = 'component_12060';
export function Component12060({ value = 12060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12060, 'data-value': derived.doubled }, children);
}
export default Component12060;
