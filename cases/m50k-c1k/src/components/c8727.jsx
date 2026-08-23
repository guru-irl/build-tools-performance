import React from 'react';
const LABEL_8727 = 'component_8727';
export function Component8727({ value = 8727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8727, 'data-value': derived.doubled }, children);
}
export default Component8727;
