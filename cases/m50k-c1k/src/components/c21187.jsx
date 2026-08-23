import React from 'react';
const LABEL_21187 = 'component_21187';
export function Component21187({ value = 21187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21187, 'data-value': derived.doubled }, children);
}
export default Component21187;
