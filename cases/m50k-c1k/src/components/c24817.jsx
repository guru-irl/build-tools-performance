import React from 'react';
const LABEL_24817 = 'component_24817';
export function Component24817({ value = 24817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24817, 'data-value': derived.doubled }, children);
}
export default Component24817;
