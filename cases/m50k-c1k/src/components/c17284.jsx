import React from 'react';
const LABEL_17284 = 'component_17284';
export function Component17284({ value = 17284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17284, 'data-value': derived.doubled }, children);
}
export default Component17284;
