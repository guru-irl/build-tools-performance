import React from 'react';
const LABEL_36535 = 'component_36535';
export function Component36535({ value = 36535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36535, 'data-value': derived.doubled }, children);
}
export default Component36535;
