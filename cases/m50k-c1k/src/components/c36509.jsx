import React from 'react';
const LABEL_36509 = 'component_36509';
export function Component36509({ value = 36509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36509, 'data-value': derived.doubled }, children);
}
export default Component36509;
