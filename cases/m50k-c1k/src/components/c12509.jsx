import React from 'react';
const LABEL_12509 = 'component_12509';
export function Component12509({ value = 12509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12509, 'data-value': derived.doubled }, children);
}
export default Component12509;
