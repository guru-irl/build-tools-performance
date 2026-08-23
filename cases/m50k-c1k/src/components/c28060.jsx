import React from 'react';
const LABEL_28060 = 'component_28060';
export function Component28060({ value = 28060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28060, 'data-value': derived.doubled }, children);
}
export default Component28060;
