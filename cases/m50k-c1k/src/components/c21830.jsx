import React from 'react';
const LABEL_21830 = 'component_21830';
export function Component21830({ value = 21830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21830, 'data-value': derived.doubled }, children);
}
export default Component21830;
