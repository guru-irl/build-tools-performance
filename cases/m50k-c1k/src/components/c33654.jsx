import React from 'react';
const LABEL_33654 = 'component_33654';
export function Component33654({ value = 33654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33654, 'data-value': derived.doubled }, children);
}
export default Component33654;
