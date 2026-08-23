import React from 'react';
const LABEL_33276 = 'component_33276';
export function Component33276({ value = 33276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33276, 'data-value': derived.doubled }, children);
}
export default Component33276;
