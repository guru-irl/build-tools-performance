import React from 'react';
const LABEL_5060 = 'component_5060';
export function Component5060({ value = 5060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5060, 'data-value': derived.doubled }, children);
}
export default Component5060;
