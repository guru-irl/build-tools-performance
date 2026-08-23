import React from 'react';
const LABEL_39644 = 'component_39644';
export function Component39644({ value = 39644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39644, 'data-value': derived.doubled }, children);
}
export default Component39644;
