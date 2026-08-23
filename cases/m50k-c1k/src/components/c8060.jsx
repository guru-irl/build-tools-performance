import React from 'react';
const LABEL_8060 = 'component_8060';
export function Component8060({ value = 8060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8060, 'data-value': derived.doubled }, children);
}
export default Component8060;
