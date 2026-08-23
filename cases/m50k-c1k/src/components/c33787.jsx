import React from 'react';
const LABEL_33787 = 'component_33787';
export function Component33787({ value = 33787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33787, 'data-value': derived.doubled }, children);
}
export default Component33787;
