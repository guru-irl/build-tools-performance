import React from 'react';
const LABEL_33113 = 'component_33113';
export function Component33113({ value = 33113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33113, 'data-value': derived.doubled }, children);
}
export default Component33113;
