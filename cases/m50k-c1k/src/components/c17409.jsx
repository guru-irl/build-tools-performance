import React from 'react';
const LABEL_17409 = 'component_17409';
export function Component17409({ value = 17409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17409, 'data-value': derived.doubled }, children);
}
export default Component17409;
