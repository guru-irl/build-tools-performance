import React from 'react';
const LABEL_20529 = 'component_20529';
export function Component20529({ value = 20529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20529, 'data-value': derived.doubled }, children);
}
export default Component20529;
