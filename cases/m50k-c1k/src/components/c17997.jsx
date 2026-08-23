import React from 'react';
const LABEL_17997 = 'component_17997';
export function Component17997({ value = 17997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17997, 'data-value': derived.doubled }, children);
}
export default Component17997;
