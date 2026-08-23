import React from 'react';
const LABEL_4060 = 'component_4060';
export function Component4060({ value = 4060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4060, 'data-value': derived.doubled }, children);
}
export default Component4060;
