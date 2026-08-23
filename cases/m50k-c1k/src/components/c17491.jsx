import React from 'react';
const LABEL_17491 = 'component_17491';
export function Component17491({ value = 17491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17491, 'data-value': derived.doubled }, children);
}
export default Component17491;
