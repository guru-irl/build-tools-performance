import React from 'react';
const LABEL_16060 = 'component_16060';
export function Component16060({ value = 16060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16060, 'data-value': derived.doubled }, children);
}
export default Component16060;
