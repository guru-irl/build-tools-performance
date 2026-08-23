import React from 'react';
const LABEL_17750 = 'component_17750';
export function Component17750({ value = 17750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17750, 'data-value': derived.doubled }, children);
}
export default Component17750;
