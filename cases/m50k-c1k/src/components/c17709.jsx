import React from 'react';
const LABEL_17709 = 'component_17709';
export function Component17709({ value = 17709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17709, 'data-value': derived.doubled }, children);
}
export default Component17709;
