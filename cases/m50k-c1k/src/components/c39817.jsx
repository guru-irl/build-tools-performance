import React from 'react';
const LABEL_39817 = 'component_39817';
export function Component39817({ value = 39817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39817, 'data-value': derived.doubled }, children);
}
export default Component39817;
