import React from 'react';
const LABEL_39379 = 'component_39379';
export function Component39379({ value = 39379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39379, 'data-value': derived.doubled }, children);
}
export default Component39379;
