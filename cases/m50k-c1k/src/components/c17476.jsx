import React from 'react';
const LABEL_17476 = 'component_17476';
export function Component17476({ value = 17476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17476, 'data-value': derived.doubled }, children);
}
export default Component17476;
