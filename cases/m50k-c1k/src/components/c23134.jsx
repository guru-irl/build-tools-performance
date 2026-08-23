import React from 'react';
const LABEL_23134 = 'component_23134';
export function Component23134({ value = 23134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23134, 'data-value': derived.doubled }, children);
}
export default Component23134;
