import React from 'react';
const LABEL_26535 = 'component_26535';
export function Component26535({ value = 26535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26535, 'data-value': derived.doubled }, children);
}
export default Component26535;
