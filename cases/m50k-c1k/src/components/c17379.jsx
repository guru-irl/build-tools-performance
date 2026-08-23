import React from 'react';
const LABEL_17379 = 'component_17379';
export function Component17379({ value = 17379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17379, 'data-value': derived.doubled }, children);
}
export default Component17379;
