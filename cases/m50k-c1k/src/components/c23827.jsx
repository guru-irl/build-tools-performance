import React from 'react';
const LABEL_23827 = 'component_23827';
export function Component23827({ value = 23827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23827, 'data-value': derived.doubled }, children);
}
export default Component23827;
