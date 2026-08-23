import React from 'react';
const LABEL_17495 = 'component_17495';
export function Component17495({ value = 17495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17495, 'data-value': derived.doubled }, children);
}
export default Component17495;
