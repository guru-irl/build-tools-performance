import React from 'react';
const LABEL_15513 = 'component_15513';
export function Component15513({ value = 15513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15513, 'data-value': derived.doubled }, children);
}
export default Component15513;
