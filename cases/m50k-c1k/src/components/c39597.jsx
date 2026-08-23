import React from 'react';
const LABEL_39597 = 'component_39597';
export function Component39597({ value = 39597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39597, 'data-value': derived.doubled }, children);
}
export default Component39597;
