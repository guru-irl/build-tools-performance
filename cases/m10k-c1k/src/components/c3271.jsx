import React from 'react';
const LABEL_3271 = 'component_3271';
export function Component3271({ value = 3271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3271, 'data-value': derived.doubled }, children);
}
export default Component3271;
