import React from 'react';
const LABEL_21490 = 'component_21490';
export function Component21490({ value = 21490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21490, 'data-value': derived.doubled }, children);
}
export default Component21490;
