import React from 'react';
const LABEL_17478 = 'component_17478';
export function Component17478({ value = 17478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17478, 'data-value': derived.doubled }, children);
}
export default Component17478;
