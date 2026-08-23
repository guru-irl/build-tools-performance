import React from 'react';
const LABEL_8535 = 'component_8535';
export function Component8535({ value = 8535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8535, 'data-value': derived.doubled }, children);
}
export default Component8535;
