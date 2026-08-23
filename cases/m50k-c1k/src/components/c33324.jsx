import React from 'react';
const LABEL_33324 = 'component_33324';
export function Component33324({ value = 33324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33324, 'data-value': derived.doubled }, children);
}
export default Component33324;
