import React from 'react';
const LABEL_6509 = 'component_6509';
export function Component6509({ value = 6509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6509, 'data-value': derived.doubled }, children);
}
export default Component6509;
