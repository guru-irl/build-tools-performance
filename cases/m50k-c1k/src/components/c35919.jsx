import React from 'react';
const LABEL_35919 = 'component_35919';
export function Component35919({ value = 35919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35919, 'data-value': derived.doubled }, children);
}
export default Component35919;
