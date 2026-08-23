import React from 'react';
const LABEL_32578 = 'component_32578';
export function Component32578({ value = 32578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32578, 'data-value': derived.doubled }, children);
}
export default Component32578;
