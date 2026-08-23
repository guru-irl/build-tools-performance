import React from 'react';
const LABEL_39060 = 'component_39060';
export function Component39060({ value = 39060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39060, 'data-value': derived.doubled }, children);
}
export default Component39060;
