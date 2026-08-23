import React from 'react';
const LABEL_17919 = 'component_17919';
export function Component17919({ value = 17919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17919, 'data-value': derived.doubled }, children);
}
export default Component17919;
