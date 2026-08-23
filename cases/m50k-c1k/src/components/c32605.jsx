import React from 'react';
const LABEL_32605 = 'component_32605';
export function Component32605({ value = 32605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32605, 'data-value': derived.doubled }, children);
}
export default Component32605;
