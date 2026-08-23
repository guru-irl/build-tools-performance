import React from 'react';
const LABEL_44060 = 'component_44060';
export function Component44060({ value = 44060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44060, 'data-value': derived.doubled }, children);
}
export default Component44060;
