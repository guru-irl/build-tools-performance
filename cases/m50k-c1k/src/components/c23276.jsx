import React from 'react';
const LABEL_23276 = 'component_23276';
export function Component23276({ value = 23276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23276, 'data-value': derived.doubled }, children);
}
export default Component23276;
