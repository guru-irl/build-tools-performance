import React from 'react';
const LABEL_3779 = 'component_3779';
export function Component3779({ value = 3779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3779, 'data-value': derived.doubled }, children);
}
export default Component3779;
