import React from 'react';
const LABEL_17170 = 'component_17170';
export function Component17170({ value = 17170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17170, 'data-value': derived.doubled }, children);
}
export default Component17170;
