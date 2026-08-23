import React from 'react';
const LABEL_12535 = 'component_12535';
export function Component12535({ value = 12535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12535, 'data-value': derived.doubled }, children);
}
export default Component12535;
