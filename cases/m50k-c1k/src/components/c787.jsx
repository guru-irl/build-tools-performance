import React from 'react';
const LABEL_787 = 'component_787';
export function Component787({ value = 787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_787, 'data-value': derived.doubled }, children);
}
export default Component787;
