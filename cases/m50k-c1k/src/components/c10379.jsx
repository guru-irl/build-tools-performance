import React from 'react';
const LABEL_10379 = 'component_10379';
export function Component10379({ value = 10379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10379, 'data-value': derived.doubled }, children);
}
export default Component10379;
