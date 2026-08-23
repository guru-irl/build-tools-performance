import React from 'react';
const LABEL_21389 = 'component_21389';
export function Component21389({ value = 21389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21389, 'data-value': derived.doubled }, children);
}
export default Component21389;
