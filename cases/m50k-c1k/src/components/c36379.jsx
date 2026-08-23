import React from 'react';
const LABEL_36379 = 'component_36379';
export function Component36379({ value = 36379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36379, 'data-value': derived.doubled }, children);
}
export default Component36379;
