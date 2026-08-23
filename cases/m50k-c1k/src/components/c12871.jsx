import React from 'react';
const LABEL_12871 = 'component_12871';
export function Component12871({ value = 12871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12871, 'data-value': derived.doubled }, children);
}
export default Component12871;
