import React from 'react';
const LABEL_15372 = 'component_15372';
export function Component15372({ value = 15372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15372, 'data-value': derived.doubled }, children);
}
export default Component15372;
