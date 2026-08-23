import React from 'react';
const LABEL_32478 = 'component_32478';
export function Component32478({ value = 32478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32478, 'data-value': derived.doubled }, children);
}
export default Component32478;
