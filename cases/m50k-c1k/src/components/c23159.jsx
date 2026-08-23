import React from 'react';
const LABEL_23159 = 'component_23159';
export function Component23159({ value = 23159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23159, 'data-value': derived.doubled }, children);
}
export default Component23159;
