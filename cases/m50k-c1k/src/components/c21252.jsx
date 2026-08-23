import React from 'react';
const LABEL_21252 = 'component_21252';
export function Component21252({ value = 21252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21252, 'data-value': derived.doubled }, children);
}
export default Component21252;
