import React from 'react';
const LABEL_17113 = 'component_17113';
export function Component17113({ value = 17113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17113, 'data-value': derived.doubled }, children);
}
export default Component17113;
