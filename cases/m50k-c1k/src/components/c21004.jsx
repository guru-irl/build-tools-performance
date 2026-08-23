import React from 'react';
const LABEL_21004 = 'component_21004';
export function Component21004({ value = 21004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21004, 'data-value': derived.doubled }, children);
}
export default Component21004;
