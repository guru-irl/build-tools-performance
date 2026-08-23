import React from 'react';
const LABEL_23633 = 'component_23633';
export function Component23633({ value = 23633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23633, 'data-value': derived.doubled }, children);
}
export default Component23633;
