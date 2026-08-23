import React from 'react';
const LABEL_21177 = 'component_21177';
export function Component21177({ value = 21177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21177, 'data-value': derived.doubled }, children);
}
export default Component21177;
