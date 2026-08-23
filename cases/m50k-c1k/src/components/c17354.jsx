import React from 'react';
const LABEL_17354 = 'component_17354';
export function Component17354({ value = 17354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17354, 'data-value': derived.doubled }, children);
}
export default Component17354;
