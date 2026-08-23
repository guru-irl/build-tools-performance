import React from 'react';
const LABEL_21149 = 'component_21149';
export function Component21149({ value = 21149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21149, 'data-value': derived.doubled }, children);
}
export default Component21149;
