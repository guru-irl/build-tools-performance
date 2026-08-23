import React from 'react';
const LABEL_29779 = 'component_29779';
export function Component29779({ value = 29779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29779, 'data-value': derived.doubled }, children);
}
export default Component29779;
