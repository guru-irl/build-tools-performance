import React from 'react';
const LABEL_11801 = 'component_11801';
export function Component11801({ value = 11801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11801, 'data-value': derived.doubled }, children);
}
export default Component11801;
