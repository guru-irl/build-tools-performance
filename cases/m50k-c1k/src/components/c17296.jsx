import React from 'react';
const LABEL_17296 = 'component_17296';
export function Component17296({ value = 17296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17296, 'data-value': derived.doubled }, children);
}
export default Component17296;
