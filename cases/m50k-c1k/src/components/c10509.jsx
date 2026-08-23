import React from 'react';
const LABEL_10509 = 'component_10509';
export function Component10509({ value = 10509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10509, 'data-value': derived.doubled }, children);
}
export default Component10509;
