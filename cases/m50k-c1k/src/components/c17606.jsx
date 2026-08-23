import React from 'react';
const LABEL_17606 = 'component_17606';
export function Component17606({ value = 17606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17606, 'data-value': derived.doubled }, children);
}
export default Component17606;
