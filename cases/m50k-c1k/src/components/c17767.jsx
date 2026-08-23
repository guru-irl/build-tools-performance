import React from 'react';
const LABEL_17767 = 'component_17767';
export function Component17767({ value = 17767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17767, 'data-value': derived.doubled }, children);
}
export default Component17767;
