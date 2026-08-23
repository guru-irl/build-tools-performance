import React from 'react';
const LABEL_33817 = 'component_33817';
export function Component33817({ value = 33817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33817, 'data-value': derived.doubled }, children);
}
export default Component33817;
