import React from 'react';
const LABEL_21409 = 'component_21409';
export function Component21409({ value = 21409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21409, 'data-value': derived.doubled }, children);
}
export default Component21409;
