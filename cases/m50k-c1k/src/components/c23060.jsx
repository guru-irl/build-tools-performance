import React from 'react';
const LABEL_23060 = 'component_23060';
export function Component23060({ value = 23060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23060, 'data-value': derived.doubled }, children);
}
export default Component23060;
