import React from 'react';
const LABEL_17268 = 'component_17268';
export function Component17268({ value = 17268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17268, 'data-value': derived.doubled }, children);
}
export default Component17268;
