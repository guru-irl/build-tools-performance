import React from 'react';
const LABEL_36060 = 'component_36060';
export function Component36060({ value = 36060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36060, 'data-value': derived.doubled }, children);
}
export default Component36060;
