import React from 'react';
const LABEL_32817 = 'component_32817';
export function Component32817({ value = 32817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32817, 'data-value': derived.doubled }, children);
}
export default Component32817;
