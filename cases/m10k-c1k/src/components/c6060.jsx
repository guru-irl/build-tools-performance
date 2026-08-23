import React from 'react';
const LABEL_6060 = 'component_6060';
export function Component6060({ value = 6060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6060, 'data-value': derived.doubled }, children);
}
export default Component6060;
