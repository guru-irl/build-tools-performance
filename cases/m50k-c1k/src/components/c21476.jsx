import React from 'react';
const LABEL_21476 = 'component_21476';
export function Component21476({ value = 21476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21476, 'data-value': derived.doubled }, children);
}
export default Component21476;
