import React from 'react';
const LABEL_17160 = 'component_17160';
export function Component17160({ value = 17160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17160, 'data-value': derived.doubled }, children);
}
export default Component17160;
