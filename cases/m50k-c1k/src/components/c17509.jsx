import React from 'react';
const LABEL_17509 = 'component_17509';
export function Component17509({ value = 17509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17509, 'data-value': derived.doubled }, children);
}
export default Component17509;
