import React from 'react';
const LABEL_21967 = 'component_21967';
export function Component21967({ value = 21967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21967, 'data-value': derived.doubled }, children);
}
export default Component21967;
