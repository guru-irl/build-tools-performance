import React from 'react';
const LABEL_38535 = 'component_38535';
export function Component38535({ value = 38535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38535, 'data-value': derived.doubled }, children);
}
export default Component38535;
