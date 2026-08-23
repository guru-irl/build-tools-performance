import React from 'react';
const LABEL_21762 = 'component_21762';
export function Component21762({ value = 21762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21762, 'data-value': derived.doubled }, children);
}
export default Component21762;
