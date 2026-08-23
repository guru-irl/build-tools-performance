import React from 'react';
const LABEL_25519 = 'component_25519';
export function Component25519({ value = 25519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25519, 'data-value': derived.doubled }, children);
}
export default Component25519;
