import React from 'react';
const LABEL_25817 = 'component_25817';
export function Component25817({ value = 25817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25817, 'data-value': derived.doubled }, children);
}
export default Component25817;
