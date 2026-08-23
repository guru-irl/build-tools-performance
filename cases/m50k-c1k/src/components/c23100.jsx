import React from 'react';
const LABEL_23100 = 'component_23100';
export function Component23100({ value = 23100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23100, 'data-value': derived.doubled }, children);
}
export default Component23100;
