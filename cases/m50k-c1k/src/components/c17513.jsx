import React from 'react';
const LABEL_17513 = 'component_17513';
export function Component17513({ value = 17513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17513, 'data-value': derived.doubled }, children);
}
export default Component17513;
