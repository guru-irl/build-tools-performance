import React from 'react';
const LABEL_31639 = 'component_31639';
export function Component31639({ value = 31639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31639, 'data-value': derived.doubled }, children);
}
export default Component31639;
