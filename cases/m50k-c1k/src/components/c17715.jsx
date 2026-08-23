import React from 'react';
const LABEL_17715 = 'component_17715';
export function Component17715({ value = 17715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17715, 'data-value': derived.doubled }, children);
}
export default Component17715;
