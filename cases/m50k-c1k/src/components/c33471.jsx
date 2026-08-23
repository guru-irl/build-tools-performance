import React from 'react';
const LABEL_33471 = 'component_33471';
export function Component33471({ value = 33471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33471, 'data-value': derived.doubled }, children);
}
export default Component33471;
