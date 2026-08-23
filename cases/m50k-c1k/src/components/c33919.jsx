import React from 'react';
const LABEL_33919 = 'component_33919';
export function Component33919({ value = 33919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33919, 'data-value': derived.doubled }, children);
}
export default Component33919;
