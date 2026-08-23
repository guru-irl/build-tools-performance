import React from 'react';
const LABEL_21487 = 'component_21487';
export function Component21487({ value = 21487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21487, 'data-value': derived.doubled }, children);
}
export default Component21487;
