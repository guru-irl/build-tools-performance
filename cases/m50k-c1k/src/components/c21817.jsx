import React from 'react';
const LABEL_21817 = 'component_21817';
export function Component21817({ value = 21817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21817, 'data-value': derived.doubled }, children);
}
export default Component21817;
