import React from 'react';
const LABEL_38060 = 'component_38060';
export function Component38060({ value = 38060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38060, 'data-value': derived.doubled }, children);
}
export default Component38060;
