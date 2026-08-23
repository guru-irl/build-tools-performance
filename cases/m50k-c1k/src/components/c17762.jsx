import React from 'react';
const LABEL_17762 = 'component_17762';
export function Component17762({ value = 17762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17762, 'data-value': derived.doubled }, children);
}
export default Component17762;
