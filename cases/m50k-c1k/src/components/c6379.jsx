import React from 'react';
const LABEL_6379 = 'component_6379';
export function Component6379({ value = 6379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6379, 'data-value': derived.doubled }, children);
}
export default Component6379;
