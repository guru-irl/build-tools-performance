import React from 'react';
const LABEL_20535 = 'component_20535';
export function Component20535({ value = 20535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20535, 'data-value': derived.doubled }, children);
}
export default Component20535;
