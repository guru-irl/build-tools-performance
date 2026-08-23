import React from 'react';
const LABEL_36919 = 'component_36919';
export function Component36919({ value = 36919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36919, 'data-value': derived.doubled }, children);
}
export default Component36919;
