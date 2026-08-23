import React from 'react';
const LABEL_10817 = 'component_10817';
export function Component10817({ value = 10817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10817, 'data-value': derived.doubled }, children);
}
export default Component10817;
