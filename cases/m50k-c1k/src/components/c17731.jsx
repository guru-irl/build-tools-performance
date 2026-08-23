import React from 'react';
const LABEL_17731 = 'component_17731';
export function Component17731({ value = 17731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17731, 'data-value': derived.doubled }, children);
}
export default Component17731;
