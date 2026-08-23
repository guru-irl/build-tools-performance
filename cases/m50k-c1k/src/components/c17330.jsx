import React from 'react';
const LABEL_17330 = 'component_17330';
export function Component17330({ value = 17330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17330, 'data-value': derived.doubled }, children);
}
export default Component17330;
