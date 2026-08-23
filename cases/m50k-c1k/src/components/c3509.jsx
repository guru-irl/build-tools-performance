import React from 'react';
const LABEL_3509 = 'component_3509';
export function Component3509({ value = 3509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3509, 'data-value': derived.doubled }, children);
}
export default Component3509;
