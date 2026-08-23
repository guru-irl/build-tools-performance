import React from 'react';
const LABEL_17158 = 'component_17158';
export function Component17158({ value = 17158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17158, 'data-value': derived.doubled }, children);
}
export default Component17158;
