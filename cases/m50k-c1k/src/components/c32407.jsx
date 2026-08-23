import React from 'react';
const LABEL_32407 = 'component_32407';
export function Component32407({ value = 32407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32407, 'data-value': derived.doubled }, children);
}
export default Component32407;
