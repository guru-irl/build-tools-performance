import React from 'react';
const LABEL_17787 = 'component_17787';
export function Component17787({ value = 17787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17787, 'data-value': derived.doubled }, children);
}
export default Component17787;
