import React from 'react';
const LABEL_17247 = 'component_17247';
export function Component17247({ value = 17247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17247, 'data-value': derived.doubled }, children);
}
export default Component17247;
