import React from 'react';
const LABEL_22060 = 'component_22060';
export function Component22060({ value = 22060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22060, 'data-value': derived.doubled }, children);
}
export default Component22060;
