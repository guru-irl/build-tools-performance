import React from 'react';
const LABEL_33758 = 'component_33758';
export function Component33758({ value = 33758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33758, 'data-value': derived.doubled }, children);
}
export default Component33758;
