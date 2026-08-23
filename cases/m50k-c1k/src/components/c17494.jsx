import React from 'react';
const LABEL_17494 = 'component_17494';
export function Component17494({ value = 17494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17494, 'data-value': derived.doubled }, children);
}
export default Component17494;
