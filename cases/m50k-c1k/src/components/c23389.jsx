import React from 'react';
const LABEL_23389 = 'component_23389';
export function Component23389({ value = 23389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23389, 'data-value': derived.doubled }, children);
}
export default Component23389;
