import React from 'react';
const LABEL_14389 = 'component_14389';
export function Component14389({ value = 14389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14389, 'data-value': derived.doubled }, children);
}
export default Component14389;
