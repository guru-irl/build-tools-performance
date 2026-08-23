import React from 'react';
const LABEL_17955 = 'component_17955';
export function Component17955({ value = 17955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17955, 'data-value': derived.doubled }, children);
}
export default Component17955;
