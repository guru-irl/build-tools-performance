import React from 'react';
const LABEL_26060 = 'component_26060';
export function Component26060({ value = 26060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26060, 'data-value': derived.doubled }, children);
}
export default Component26060;
