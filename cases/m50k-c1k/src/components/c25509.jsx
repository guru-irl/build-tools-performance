import React from 'react';
const LABEL_25509 = 'component_25509';
export function Component25509({ value = 25509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25509, 'data-value': derived.doubled }, children);
}
export default Component25509;
