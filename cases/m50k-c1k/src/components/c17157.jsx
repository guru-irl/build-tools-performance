import React from 'react';
const LABEL_17157 = 'component_17157';
export function Component17157({ value = 17157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17157, 'data-value': derived.doubled }, children);
}
export default Component17157;
