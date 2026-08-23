import React from 'react';
const LABEL_11605 = 'component_11605';
export function Component11605({ value = 11605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11605, 'data-value': derived.doubled }, children);
}
export default Component11605;
