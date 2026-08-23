import React from 'react';
const LABEL_39919 = 'component_39919';
export function Component39919({ value = 39919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39919, 'data-value': derived.doubled }, children);
}
export default Component39919;
