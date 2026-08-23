import React from 'react';
const LABEL_43817 = 'component_43817';
export function Component43817({ value = 43817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43817, 'data-value': derived.doubled }, children);
}
export default Component43817;
