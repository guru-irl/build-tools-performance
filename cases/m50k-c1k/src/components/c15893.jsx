import React from 'react';
const LABEL_15893 = 'component_15893';
export function Component15893({ value = 15893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15893, 'data-value': derived.doubled }, children);
}
export default Component15893;
