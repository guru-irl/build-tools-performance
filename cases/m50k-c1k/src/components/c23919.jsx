import React from 'react';
const LABEL_23919 = 'component_23919';
export function Component23919({ value = 23919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23919, 'data-value': derived.doubled }, children);
}
export default Component23919;
