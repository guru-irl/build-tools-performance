import React from 'react';
const LABEL_18060 = 'component_18060';
export function Component18060({ value = 18060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18060, 'data-value': derived.doubled }, children);
}
export default Component18060;
