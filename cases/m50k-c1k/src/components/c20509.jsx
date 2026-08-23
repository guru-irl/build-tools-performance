import React from 'react';
const LABEL_20509 = 'component_20509';
export function Component20509({ value = 20509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20509, 'data-value': derived.doubled }, children);
}
export default Component20509;
