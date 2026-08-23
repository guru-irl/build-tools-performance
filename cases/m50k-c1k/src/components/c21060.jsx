import React from 'react';
const LABEL_21060 = 'component_21060';
export function Component21060({ value = 21060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21060, 'data-value': derived.doubled }, children);
}
export default Component21060;
