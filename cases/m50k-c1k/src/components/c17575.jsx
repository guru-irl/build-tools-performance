import React from 'react';
const LABEL_17575 = 'component_17575';
export function Component17575({ value = 17575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17575, 'data-value': derived.doubled }, children);
}
export default Component17575;
