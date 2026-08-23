import React from 'react';
const LABEL_36817 = 'component_36817';
export function Component36817({ value = 36817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36817, 'data-value': derived.doubled }, children);
}
export default Component36817;
