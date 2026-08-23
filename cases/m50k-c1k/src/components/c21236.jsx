import React from 'react';
const LABEL_21236 = 'component_21236';
export function Component21236({ value = 21236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21236, 'data-value': derived.doubled }, children);
}
export default Component21236;
