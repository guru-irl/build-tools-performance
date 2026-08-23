import React from 'react';
const LABEL_1060 = 'component_1060';
export function Component1060({ value = 1060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1060, 'data-value': derived.doubled }, children);
}
export default Component1060;
