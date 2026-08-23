import React from 'react';
const LABEL_35093 = 'component_35093';
export function Component35093({ value = 35093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35093, 'data-value': derived.doubled }, children);
}
export default Component35093;
