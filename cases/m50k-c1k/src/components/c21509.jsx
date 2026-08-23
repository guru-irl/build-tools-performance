import React from 'react';
const LABEL_21509 = 'component_21509';
export function Component21509({ value = 21509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21509, 'data-value': derived.doubled }, children);
}
export default Component21509;
