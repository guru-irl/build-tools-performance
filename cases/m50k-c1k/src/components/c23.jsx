import React from 'react';
const LABEL_23 = 'component_23';
export function Component23({ value = 23, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23, 'data-value': derived.doubled }, children);
}
export default Component23;
