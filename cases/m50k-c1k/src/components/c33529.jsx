import React from 'react';
const LABEL_33529 = 'component_33529';
export function Component33529({ value = 33529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33529, 'data-value': derived.doubled }, children);
}
export default Component33529;
