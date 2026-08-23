import React from 'react';
const LABEL_21692 = 'component_21692';
export function Component21692({ value = 21692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21692, 'data-value': derived.doubled }, children);
}
export default Component21692;
