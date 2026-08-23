import React from 'react';
const LABEL_17361 = 'component_17361';
export function Component17361({ value = 17361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17361, 'data-value': derived.doubled }, children);
}
export default Component17361;
