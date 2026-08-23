import React from 'react';
const LABEL_17060 = 'component_17060';
export function Component17060({ value = 17060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17060, 'data-value': derived.doubled }, children);
}
export default Component17060;
