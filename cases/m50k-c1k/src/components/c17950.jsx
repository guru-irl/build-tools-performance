import React from 'react';
const LABEL_17950 = 'component_17950';
export function Component17950({ value = 17950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17950, 'data-value': derived.doubled }, children);
}
export default Component17950;
