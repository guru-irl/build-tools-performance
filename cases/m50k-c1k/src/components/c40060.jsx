import React from 'react';
const LABEL_40060 = 'component_40060';
export function Component40060({ value = 40060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40060, 'data-value': derived.doubled }, children);
}
export default Component40060;
