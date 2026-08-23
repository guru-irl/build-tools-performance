import React from 'react';
const LABEL_23380 = 'component_23380';
export function Component23380({ value = 23380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23380, 'data-value': derived.doubled }, children);
}
export default Component23380;
