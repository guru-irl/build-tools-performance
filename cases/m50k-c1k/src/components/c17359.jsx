import React from 'react';
const LABEL_17359 = 'component_17359';
export function Component17359({ value = 17359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17359, 'data-value': derived.doubled }, children);
}
export default Component17359;
