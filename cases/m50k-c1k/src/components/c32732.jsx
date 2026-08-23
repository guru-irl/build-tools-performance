import React from 'react';
const LABEL_32732 = 'component_32732';
export function Component32732({ value = 32732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32732, 'data-value': derived.doubled }, children);
}
export default Component32732;
