import React from 'react';
const LABEL_16817 = 'component_16817';
export function Component16817({ value = 16817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16817, 'data-value': derived.doubled }, children);
}
export default Component16817;
