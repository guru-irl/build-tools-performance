import React from 'react';
const LABEL_17605 = 'component_17605';
export function Component17605({ value = 17605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17605, 'data-value': derived.doubled }, children);
}
export default Component17605;
