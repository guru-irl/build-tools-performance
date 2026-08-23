import React from 'react';
const LABEL_25991 = 'component_25991';
export function Component25991({ value = 25991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25991, 'data-value': derived.doubled }, children);
}
export default Component25991;
