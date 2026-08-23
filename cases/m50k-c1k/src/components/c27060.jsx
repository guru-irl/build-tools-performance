import React from 'react';
const LABEL_27060 = 'component_27060';
export function Component27060({ value = 27060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27060, 'data-value': derived.doubled }, children);
}
export default Component27060;
