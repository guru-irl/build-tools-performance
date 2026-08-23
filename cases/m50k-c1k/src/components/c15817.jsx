import React from 'react';
const LABEL_15817 = 'component_15817';
export function Component15817({ value = 15817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15817, 'data-value': derived.doubled }, children);
}
export default Component15817;
