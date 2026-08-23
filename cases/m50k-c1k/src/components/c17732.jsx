import React from 'react';
const LABEL_17732 = 'component_17732';
export function Component17732({ value = 17732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17732, 'data-value': derived.doubled }, children);
}
export default Component17732;
