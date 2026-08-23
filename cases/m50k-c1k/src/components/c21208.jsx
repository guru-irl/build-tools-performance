import React from 'react';
const LABEL_21208 = 'component_21208';
export function Component21208({ value = 21208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21208, 'data-value': derived.doubled }, children);
}
export default Component21208;
