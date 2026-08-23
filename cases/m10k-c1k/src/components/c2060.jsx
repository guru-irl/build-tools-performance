import React from 'react';
const LABEL_2060 = 'component_2060';
export function Component2060({ value = 2060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2060, 'data-value': derived.doubled }, children);
}
export default Component2060;
