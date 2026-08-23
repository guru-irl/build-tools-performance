import React from 'react';
const LABEL_23268 = 'component_23268';
export function Component23268({ value = 23268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23268, 'data-value': derived.doubled }, children);
}
export default Component23268;
