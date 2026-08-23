import React from 'react';
const LABEL_6535 = 'component_6535';
export function Component6535({ value = 6535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6535, 'data-value': derived.doubled }, children);
}
export default Component6535;
