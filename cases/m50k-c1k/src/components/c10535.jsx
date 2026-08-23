import React from 'react';
const LABEL_10535 = 'component_10535';
export function Component10535({ value = 10535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10535, 'data-value': derived.doubled }, children);
}
export default Component10535;
