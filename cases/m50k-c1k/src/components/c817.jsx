import React from 'react';
const LABEL_817 = 'component_817';
export function Component817({ value = 817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_817, 'data-value': derived.doubled }, children);
}
export default Component817;
