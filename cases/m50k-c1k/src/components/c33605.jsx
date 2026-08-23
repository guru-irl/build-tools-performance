import React from 'react';
const LABEL_33605 = 'component_33605';
export function Component33605({ value = 33605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33605, 'data-value': derived.doubled }, children);
}
export default Component33605;
