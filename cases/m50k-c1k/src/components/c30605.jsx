import React from 'react';
const LABEL_30605 = 'component_30605';
export function Component30605({ value = 30605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30605, 'data-value': derived.doubled }, children);
}
export default Component30605;
