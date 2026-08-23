import React from 'react';
const LABEL_23787 = 'component_23787';
export function Component23787({ value = 23787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23787, 'data-value': derived.doubled }, children);
}
export default Component23787;
