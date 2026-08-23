import React from 'react';
const LABEL_17612 = 'component_17612';
export function Component17612({ value = 17612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17612, 'data-value': derived.doubled }, children);
}
export default Component17612;
