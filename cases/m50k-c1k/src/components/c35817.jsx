import React from 'react';
const LABEL_35817 = 'component_35817';
export function Component35817({ value = 35817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35817, 'data-value': derived.doubled }, children);
}
export default Component35817;
