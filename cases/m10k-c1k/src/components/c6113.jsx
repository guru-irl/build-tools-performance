import React from 'react';
const LABEL_6113 = 'component_6113';
export function Component6113({ value = 6113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6113, 'data-value': derived.doubled }, children);
}
export default Component6113;
