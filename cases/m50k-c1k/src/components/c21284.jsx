import React from 'react';
const LABEL_21284 = 'component_21284';
export function Component21284({ value = 21284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21284, 'data-value': derived.doubled }, children);
}
export default Component21284;
