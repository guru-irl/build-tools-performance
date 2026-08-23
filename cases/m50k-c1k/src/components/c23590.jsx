import React from 'react';
const LABEL_23590 = 'component_23590';
export function Component23590({ value = 23590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23590, 'data-value': derived.doubled }, children);
}
export default Component23590;
