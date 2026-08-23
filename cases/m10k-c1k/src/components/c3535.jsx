import React from 'react';
const LABEL_3535 = 'component_3535';
export function Component3535({ value = 3535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3535, 'data-value': derived.doubled }, children);
}
export default Component3535;
