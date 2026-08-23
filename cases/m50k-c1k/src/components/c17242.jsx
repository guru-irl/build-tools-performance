import React from 'react';
const LABEL_17242 = 'component_17242';
export function Component17242({ value = 17242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17242, 'data-value': derived.doubled }, children);
}
export default Component17242;
