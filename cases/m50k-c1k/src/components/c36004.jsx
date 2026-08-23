import React from 'react';
const LABEL_36004 = 'component_36004';
export function Component36004({ value = 36004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36004, 'data-value': derived.doubled }, children);
}
export default Component36004;
