import React from 'react';
const LABEL_2535 = 'component_2535';
export function Component2535({ value = 2535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2535, 'data-value': derived.doubled }, children);
}
export default Component2535;
