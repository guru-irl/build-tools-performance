import React from 'react';
const LABEL_21471 = 'component_21471';
export function Component21471({ value = 21471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21471, 'data-value': derived.doubled }, children);
}
export default Component21471;
