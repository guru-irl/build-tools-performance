import React from 'react';
const LABEL_32535 = 'component_32535';
export function Component32535({ value = 32535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32535, 'data-value': derived.doubled }, children);
}
export default Component32535;
