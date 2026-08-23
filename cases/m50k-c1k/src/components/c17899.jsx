import React from 'react';
const LABEL_17899 = 'component_17899';
export function Component17899({ value = 17899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17899, 'data-value': derived.doubled }, children);
}
export default Component17899;
