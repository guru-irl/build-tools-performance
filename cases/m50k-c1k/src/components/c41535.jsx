import React from 'react';
const LABEL_41535 = 'component_41535';
export function Component41535({ value = 41535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41535, 'data-value': derived.doubled }, children);
}
export default Component41535;
