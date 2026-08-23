import React from 'react';
const LABEL_21280 = 'component_21280';
export function Component21280({ value = 21280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21280, 'data-value': derived.doubled }, children);
}
export default Component21280;
