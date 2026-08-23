import React from 'react';
const LABEL_22509 = 'component_22509';
export function Component22509({ value = 22509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22509, 'data-value': derived.doubled }, children);
}
export default Component22509;
