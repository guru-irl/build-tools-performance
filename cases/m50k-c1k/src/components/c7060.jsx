import React from 'react';
const LABEL_7060 = 'component_7060';
export function Component7060({ value = 7060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7060, 'data-value': derived.doubled }, children);
}
export default Component7060;
