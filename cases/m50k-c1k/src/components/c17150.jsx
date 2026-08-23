import React from 'react';
const LABEL_17150 = 'component_17150';
export function Component17150({ value = 17150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17150, 'data-value': derived.doubled }, children);
}
export default Component17150;
