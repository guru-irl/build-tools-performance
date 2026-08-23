import React from 'react';
const LABEL_15787 = 'component_15787';
export function Component15787({ value = 15787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15787, 'data-value': derived.doubled }, children);
}
export default Component15787;
