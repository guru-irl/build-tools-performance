import React from 'react';
const LABEL_21379 = 'component_21379';
export function Component21379({ value = 21379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21379, 'data-value': derived.doubled }, children);
}
export default Component21379;
