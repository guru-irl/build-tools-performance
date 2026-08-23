import React from 'react';
const LABEL_21459 = 'component_21459';
export function Component21459({ value = 21459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21459, 'data-value': derived.doubled }, children);
}
export default Component21459;
