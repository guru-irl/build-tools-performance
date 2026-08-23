import React from 'react';
const LABEL_39787 = 'component_39787';
export function Component39787({ value = 39787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39787, 'data-value': derived.doubled }, children);
}
export default Component39787;
