import React from 'react';
const LABEL_21273 = 'component_21273';
export function Component21273({ value = 21273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21273, 'data-value': derived.doubled }, children);
}
export default Component21273;
