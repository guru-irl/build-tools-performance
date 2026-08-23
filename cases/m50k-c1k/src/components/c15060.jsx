import React from 'react';
const LABEL_15060 = 'component_15060';
export function Component15060({ value = 15060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15060, 'data-value': derived.doubled }, children);
}
export default Component15060;
