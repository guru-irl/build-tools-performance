import React from 'react';
const LABEL_23509 = 'component_23509';
export function Component23509({ value = 23509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23509, 'data-value': derived.doubled }, children);
}
export default Component23509;
