import React from 'react';
const LABEL_33535 = 'component_33535';
export function Component33535({ value = 33535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33535, 'data-value': derived.doubled }, children);
}
export default Component33535;
