import React from 'react';
const LABEL_17521 = 'component_17521';
export function Component17521({ value = 17521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17521, 'data-value': derived.doubled }, children);
}
export default Component17521;
