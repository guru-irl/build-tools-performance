import React from 'react';
const LABEL_20060 = 'component_20060';
export function Component20060({ value = 20060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20060, 'data-value': derived.doubled }, children);
}
export default Component20060;
