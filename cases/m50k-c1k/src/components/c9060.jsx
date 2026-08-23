import React from 'react';
const LABEL_9060 = 'component_9060';
export function Component9060({ value = 9060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9060, 'data-value': derived.doubled }, children);
}
export default Component9060;
