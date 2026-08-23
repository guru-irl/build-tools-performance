import React from 'react';
const LABEL_38789 = 'component_38789';
export function Component38789({ value = 38789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38789, 'data-value': derived.doubled }, children);
}
export default Component38789;
