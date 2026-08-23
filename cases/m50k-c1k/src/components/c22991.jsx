import React from 'react';
const LABEL_22991 = 'component_22991';
export function Component22991({ value = 22991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22991, 'data-value': derived.doubled }, children);
}
export default Component22991;
