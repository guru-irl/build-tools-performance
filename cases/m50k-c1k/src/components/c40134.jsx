import React from 'react';
const LABEL_40134 = 'component_40134';
export function Component40134({ value = 40134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40134, 'data-value': derived.doubled }, children);
}
export default Component40134;
