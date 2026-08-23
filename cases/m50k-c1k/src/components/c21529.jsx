import React from 'react';
const LABEL_21529 = 'component_21529';
export function Component21529({ value = 21529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21529, 'data-value': derived.doubled }, children);
}
export default Component21529;
