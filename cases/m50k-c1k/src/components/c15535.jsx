import React from 'react';
const LABEL_15535 = 'component_15535';
export function Component15535({ value = 15535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15535, 'data-value': derived.doubled }, children);
}
export default Component15535;
