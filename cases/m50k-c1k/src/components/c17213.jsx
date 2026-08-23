import React from 'react';
const LABEL_17213 = 'component_17213';
export function Component17213({ value = 17213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17213, 'data-value': derived.doubled }, children);
}
export default Component17213;
