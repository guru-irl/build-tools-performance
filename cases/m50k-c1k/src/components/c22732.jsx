import React from 'react';
const LABEL_22732 = 'component_22732';
export function Component22732({ value = 22732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22732, 'data-value': derived.doubled }, children);
}
export default Component22732;
