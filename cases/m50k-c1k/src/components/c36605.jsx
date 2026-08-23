import React from 'react';
const LABEL_36605 = 'component_36605';
export function Component36605({ value = 36605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36605, 'data-value': derived.doubled }, children);
}
export default Component36605;
