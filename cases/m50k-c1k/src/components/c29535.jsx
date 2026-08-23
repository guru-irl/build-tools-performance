import React from 'react';
const LABEL_29535 = 'component_29535';
export function Component29535({ value = 29535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29535, 'data-value': derived.doubled }, children);
}
export default Component29535;
