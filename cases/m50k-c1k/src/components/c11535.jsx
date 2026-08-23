import React from 'react';
const LABEL_11535 = 'component_11535';
export function Component11535({ value = 11535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11535, 'data-value': derived.doubled }, children);
}
export default Component11535;
