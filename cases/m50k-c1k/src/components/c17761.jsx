import React from 'react';
const LABEL_17761 = 'component_17761';
export function Component17761({ value = 17761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17761, 'data-value': derived.doubled }, children);
}
export default Component17761;
