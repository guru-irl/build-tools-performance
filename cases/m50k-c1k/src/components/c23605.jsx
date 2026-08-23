import React from 'react';
const LABEL_23605 = 'component_23605';
export function Component23605({ value = 23605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23605, 'data-value': derived.doubled }, children);
}
export default Component23605;
