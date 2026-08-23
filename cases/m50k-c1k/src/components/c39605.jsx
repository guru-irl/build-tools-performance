import React from 'react';
const LABEL_39605 = 'component_39605';
export function Component39605({ value = 39605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39605, 'data-value': derived.doubled }, children);
}
export default Component39605;
