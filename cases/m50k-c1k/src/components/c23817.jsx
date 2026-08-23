import React from 'react';
const LABEL_23817 = 'component_23817';
export function Component23817({ value = 23817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23817, 'data-value': derived.doubled }, children);
}
export default Component23817;
